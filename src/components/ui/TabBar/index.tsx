import React, { useCallback, useEffect } from 'react';
import { TabBar as AntMTabBar } from 'antd-mobile';
import { ScanCodeOutline, SetOutline } from 'antd-mobile-icons';
import { useLocation, useNavigate } from 'react-router-dom';

const tabs = [
  {
    key: '/',
    icon: <ScanCodeOutline />,
  },
  {
    key: '/settings',
    icon: <SetOutline />,
  },
];

interface TabBarProps {
  className?: string;
}

export function TabBar(props: TabBarProps): JSX.Element {
  const { className } = props;
  const location = useLocation();
  const navigate = useNavigate();
  const [navLink, setNavLink] = React.useState(location.pathname || '/');

  const redirect = useCallback(
    () => navigate(navLink, { replace: true }),
    [navigate, navLink]
  );

  useEffect(() => {
    redirect();
  }, [redirect]);

  function onChangeRouteHandler(key: string) {
    setNavLink(key);
    redirect();
  }

  return (
    <AntMTabBar className={className} onChange={onChangeRouteHandler}>
      {tabs.map((item) => (
        <AntMTabBar.Item key={item.key} icon={item.icon} />
      ))}
    </AntMTabBar>
  );
}
