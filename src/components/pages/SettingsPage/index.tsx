import React, { ChangeEvent } from 'react';
import { ExclamationCircleTwoTone, DeleteOutlined } from '@ant-design/icons';
import { Typography, Button, Divider, Input } from 'antd';
import useLocalStorage from 'use-local-storage';
import { LS_DATA_NAME, LS_DATA_FILE_NAME } from '~src/shared/constants';
import { isDataFileValid } from '~src/utils';
import { ProductsData } from '~src/types/ProductsData';
import styles from './styles.module.scss';

const { Title, Paragraph } = Typography;

export function SettingsPage(): JSX.Element {
  const [data, setData] = useLocalStorage<ProductsData | null>(
    LS_DATA_NAME,
    null
  );
  const [dataFileName, setDataFileName] = useLocalStorage<string | null>(
    LS_DATA_FILE_NAME,
    null
  );

  function onLoadData(event: ChangeEvent<HTMLInputElement>) {
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

        setData(JSON.parse(reader.result as string));
        setDataFileName(file.name);

        event.target.value = '';
      };

      reader.onerror = function () {
        console.log(reader.error);
      };
    }
  }

  function onFileRemove() {
    setData(null);
    setDataFileName(null);
  }

  return (
    <div className={styles.settingsPage}>
      <Title level={2}>Настройки</Title>
      <Divider />
      <Title level={4}>Файл c данными</Title>
      {data ? (
        <Paragraph className={styles.filename}>
          <span className={styles.text}>{dataFileName}</span>
          <Button
            className={styles.button}
            danger
            type="primary"
            shape="circle"
            size="small"
            icon={<DeleteOutlined onClick={onFileRemove} />}
          />
        </Paragraph>
      ) : (
        <Paragraph className={styles.alert}>
          <ExclamationCircleTwoTone className={styles.icon} />
          <span className={styles.text}>Файл с данными отсутствует!</span>
        </Paragraph>
      )}
      <Button>
        <label htmlFor="inputFile">Загрузить {data ? 'другой' : 'новый'}</label>
      </Button>
      <input
        id="inputFile"
        className={styles.input}
        onChange={onLoadData}
        type="file"
      />
    </div>
  );
}
