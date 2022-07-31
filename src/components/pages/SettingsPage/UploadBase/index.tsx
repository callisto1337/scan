import React, { ChangeEvent, useState } from 'react';
import { Button, Typography } from 'antd';
import axios, { AxiosResponse } from 'axios';
import { CloudUploadOutlined, UploadOutlined } from '@ant-design/icons';
import { useLocalStorage } from '@rehooks/local-storage';
import { ProductsData } from '~src/types';
import {
  LS_DATA_FILE_NAME,
  LS_DATA_NAME,
  LS_NETWORK_STATUS,
  LS_UPLOAD_TIME_NAME,
} from '~src/shared';
import { isDataFileValid } from '~src/utils';
import { config } from '~src/config';
import styles from './styles.module.scss';

const { Title } = Typography;

export function UploadBase(): JSX.Element {
  const [networkStatus, setNetworkStatus] = useLocalStorage<
    'offline' | 'online'
  >(LS_NETWORK_STATUS);

  const [data, setData] = useLocalStorage<ProductsData | null>(
    LS_DATA_NAME,
    null
  );
  const [uploadTime, setUploadTime] = useLocalStorage<Date | null>(
    LS_UPLOAD_TIME_NAME,
    null
  );
  const [dataFileName, setDataFileName] = useLocalStorage<string | null>(
    LS_DATA_FILE_NAME,
    null
  );
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [loadingMethod, setLoadingMethod] = useState<'local' | 'server'>(
    'server'
  );

  function showSuccessfulUpload() {
    alert('База успешно загружена!');
  }

  function saveUploadTime() {
    setUploadTime(new Date());
  }

  function onUploadFromDevice(event: ChangeEvent<HTMLInputElement>): void {
    setLoadingMethod('local');
    setIsLoading(true);

    if (event.target.files) {
      const reader = new FileReader();
      const file = event.target.files[0];

      reader.readAsText(file);

      reader.onload = function () {
        if (!reader.result) {
          return;
        }

        if (!isDataFileValid(reader.result as string)) {
          alert('Неверный формат файла!');

          return;
        }

        event.target.value = '';

        setData(JSON.parse(reader.result as string));
        setDataFileName(file.name);
        showSuccessfulUpload();
        saveUploadTime();
      };

      reader.onerror = function () {
        console.log(reader.error);
      };

      reader.onloadend = function () {
        setIsLoading(false);
      };
    }
  }

  function onUploadFromServer(): void {
    setLoadingMethod('server');
    setIsLoading(true);

    axios
      .get(config.REMOTE_DATA_URL)
      .then(({ data }: AxiosResponse<ProductsData>) => {
        setData(data);
        setDataFileName('data.json');
        showSuccessfulUpload();
        saveUploadTime();
      })
      .catch(() => {
        alert('Ошибка при получении базы с сервера');
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  return (
    <div>
      <Title level={4}>Загрузить базу</Title>
      <Button
        disabled={loadingMethod === 'server' && isLoading}
        loading={loadingMethod !== 'server' && isLoading}
        type="primary"
        className={styles.action}
        icon={<UploadOutlined />}
        block
      >
        <label htmlFor="inputFileDevice">С устройства</label>
      </Button>
      <Button
        disabled={
          (loadingMethod !== 'server' && isLoading) ||
          networkStatus === 'offline'
        }
        loading={loadingMethod === 'server' && isLoading}
        type="primary"
        onClick={onUploadFromServer}
        className={styles.action}
        icon={<CloudUploadOutlined />}
        block
      >
        С сервера
      </Button>

      <input
        id="inputFileDevice"
        className={styles.input}
        onChange={onUploadFromDevice}
        type="file"
      />
    </div>
  );
}
