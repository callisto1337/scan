import React from 'react';
import { Typography } from 'antd';
import { useLocalStorage } from '@rehooks/local-storage';
import { LS_NETWORK_STATUS } from '~src/shared';

const { Title, Text } = Typography;

export function AppInfo() {
  const [networkStatus, setNetworkStatus] = useLocalStorage<
    'offline' | 'online'
  >(LS_NETWORK_STATUS);

  return (
    <div>
      <Title level={4}>Данные приложения</Title>
      <Text type="secondary">Статус сети:&nbsp;</Text>
      {networkStatus === 'offline' ? 'Не в сети' : 'В сети'}
    </div>
  );
}
