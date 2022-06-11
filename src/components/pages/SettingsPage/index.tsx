import React from 'react';
import { DataUploader } from '~src/components/ui';
import { Typography } from 'antd';
import styles from './styles.module.scss';

const { Title } = Typography;

export function SettingsPage(): JSX.Element {
  return (
    <div className={styles.settingsPage}>
      <Title level={2}>Настройки</Title>
      <DataUploader />
    </div>
  );
}
