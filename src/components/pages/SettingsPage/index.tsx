import React from 'react';
import { Typography, Divider } from 'antd';
import { AppInfo } from './AppInfo';
import { BaseInfo } from './BaseInfo';
import { UploadBase } from './UploadBase';
import styles from './styles.module.scss';

const { Title } = Typography;

export function SettingsPage(): JSX.Element {
  return (
    <div className={styles.settingsPage}>
      <Title level={2}>Настройки</Title>
      <Divider />
      <AppInfo />
      <Divider />
      <BaseInfo />
      <Divider />
      <UploadBase />
    </div>
  );
}
