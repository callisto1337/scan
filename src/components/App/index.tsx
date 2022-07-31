import React, { useEffect } from 'react';
import { useGlobalCssVariables } from '~src/hooks';
import { ScannerPage, SettingsPage } from '~src/components/pages';
import { MainTemplate } from '~src/components/templates';
import { Routes, Route } from 'react-router-dom';
import { useLocalStorage } from '@rehooks/local-storage';
import { LS_NETWORK_STATUS } from '~src/shared';

export function App(): JSX.Element {
  const [networkStatus, setNetworkStatus] = useLocalStorage<
    'offline' | 'online'
  >(LS_NETWORK_STATUS);

  useGlobalCssVariables();
  useEffect(() => {
    setNetworkStatus(navigator.onLine ? 'online' : 'offline');

    window.addEventListener('online', () => setNetworkStatus('online'));
    window.addEventListener('offline', () => setNetworkStatus('offline'));
  }, []);

  return (
    <MainTemplate>
      <Routes>
        <Route path="/" element={<ScannerPage />} />
        <Route path="/settings" element={<SettingsPage />} />
      </Routes>
    </MainTemplate>
  );
}
