import React from 'react';
import { TabBar as AntMTabBar } from 'antd-mobile';
import { ScanCodeOutline, SetOutline } from 'antd-mobile-icons';

const tabs = [
  {
    key: 'home',
    icon: <ScanCodeOutline />,
  },
  {
    key: 'settings',
    icon: <SetOutline />,
  },
];

interface TabBarProps {
  className?: string;
}

export function TabBar(props: TabBarProps): JSX.Element {
  const { className } = props;

  return (
    <AntMTabBar className={className}>
      {tabs.map((item) => (
        <AntMTabBar.Item key={item.key} icon={item.icon} />
      ))}
    </AntMTabBar>
  );
}
