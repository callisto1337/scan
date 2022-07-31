import React, { useMemo } from 'react';
import cn from 'classnames';
import { Button, Typography } from 'antd';
import dayjs from 'dayjs';
import { ExclamationCircleTwoTone } from '@ant-design/icons';
import { useLocalStorage } from '@rehooks/local-storage';
import { ProductsData } from '~src/types';
import {
  LS_DATA_FILE_NAME,
  LS_DATA_NAME,
  LS_UPLOAD_TIME_NAME,
} from '~src/shared';
import styles from './styles.module.scss';

const { Paragraph, Text, Title } = Typography;

export function BaseInfo(): JSX.Element {
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
  const normalizedUploadTime = useMemo(
    () => (uploadTime ? dayjs(uploadTime).format('YYYY-MM-DD HH:mm:ss') : ''),
    [uploadTime]
  );

  function onFileRemove() {
    const conf = confirm('Вы действительно хотите удалить текущую базу?');

    if (!conf) {
      return;
    }

    setData(null);
    setDataFileName(null);
  }

  return (
    <div>
      <Title level={4}>База</Title>
      {data ? (
        <>
          <Text className={cn(styles.filename, styles.infoItem)}>
            <span className={styles.text}>{dataFileName}</span>
          </Text>
          <Text type="secondary" className={styles.infoItem}>
            {uploadTime && `Дата загрузки: ${normalizedUploadTime}`}
          </Text>
          <Button
            className={styles.removeButton}
            onClick={onFileRemove}
            danger
            type="primary"
            size="small"
          >
            Удалить
          </Button>
        </>
      ) : (
        <Paragraph className={styles.alert}>
          <ExclamationCircleTwoTone className={styles.icon} />
          <span className={styles.text}>База отсутствует!</span>
        </Paragraph>
      )}
    </div>
  );
}
