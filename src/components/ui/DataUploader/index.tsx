import React from 'react';
import { Alert } from 'antd';
import { Button, message, Upload } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import styles from './styles.module.scss';

const MOCK_URL = 'http://192.168.1.4:8080/data.txt';

export function DataUploader(): JSX.Element {
  function dummyRequest({ file, onSuccess }: any) {
    setTimeout(() => {
      onSuccess('ok');
    }, 0);

    console.log(file);
  }

  return (
    <div>
      <Alert message="Нет данных по штрих-кодам!" type="warning" showIcon />
      <div className={styles.actions}>
        <Upload customRequest={dummyRequest}>
          <Button icon={<UploadOutlined />}>Загрузить с устройства</Button>
        </Upload>
      </div>
    </div>
  );
}
