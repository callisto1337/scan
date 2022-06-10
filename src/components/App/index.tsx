import React from 'react';
import { useGlobalCssVariables } from '~src/hooks';
import { ScannerPage, SettingsPage } from '~src/components/pages';
import { MainTemplate } from '~src/components/templates';
import { Routes, Route } from 'react-router-dom';

/**
 * TODO
 *
 * 1. Минимальная длина штрих-кода (либо формат)
 */

export function App(): JSX.Element {
  useGlobalCssVariables();

  return (
    <MainTemplate>
      <Routes>
        <Route path="/" element={<ScannerPage />} />
        <Route path="/settings" element={<SettingsPage />} />
      </Routes>
    </MainTemplate>
  );
}
