import React from 'react';
import { useGlobalCssVariables } from '~src/hooks';
import { ScannerPage } from '~src/components/pages';
import { MainTemplate } from '~src/components/templates';

/**
 * TODO
 *
 * 1. Минимальная длина штрих-кода (либо формат)
 */

export function App(): JSX.Element {
  useGlobalCssVariables();

  return (
    <MainTemplate>
      <ScannerPage />
    </MainTemplate>
  );
}
