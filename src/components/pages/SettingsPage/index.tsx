import React, { ChangeEvent } from 'react';
import { ExclamationCircleTwoTone, DeleteOutlined } from '@ant-design/icons';
import { Typography, Button, Divider } from 'antd';
import useLocalStorage from 'use-local-storage';
import {
  LS_BARCODES_DATA_NAME,
  LS_BARCODES_FILE_NAME,
} from '~src/shared/constants';
import styles from './styles.module.scss';

const { Title, Paragraph } = Typography;

export function SettingsPage(): JSX.Element {
  const [barcodes, setBarcodes] = useLocalStorage<string | null>(
    LS_BARCODES_DATA_NAME,
    null
  );
  const [barcodesFileName, setBarcodesFileName] = useLocalStorage<
    string | null
  >(LS_BARCODES_FILE_NAME, null);

  function onLoadData(event: ChangeEvent<HTMLInputElement>) {
    if (event.target.files) {
      const reader = new FileReader();
      const file = event.target.files[0];

      reader.readAsText(file);

      reader.onload = function () {
        if (reader.result) {
          setBarcodes(reader.result as string);
          setBarcodesFileName(file.name);
        }
      };

      reader.onerror = function () {
        console.log(reader.error);
      };
    }
  }

  function onFileRemove() {
    setBarcodes(null);
    setBarcodesFileName(null);
  }

  return (
    <div className={styles.settingsPage}>
      <Title level={2}>Настройки</Title>
      <Divider />
      <Title level={4}>Файл c данными</Title>
      {barcodes ? (
        <Paragraph className={styles.filename}>
          <span className={styles.text}>{barcodesFileName}</span>
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
        <label htmlFor="inputFile">
          Загрузить {barcodes ? 'другой' : 'новый'}
        </label>
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
