import React from 'react';
import { useScanCode, useGlobalCssVariables } from '~src/hooks';
import { Table, PageSpinner } from '~src/components/ui';
import * as styles from './styles.module.scss';

/**
 * TODO
 *
 * 1. Минимальная длина штрих-кода (либо формат)
 */

export function App(): JSX.Element {
  const { barCode, isLoading } = useScanCode();

  useGlobalCssVariables();

  return (
    <div className={styles.page}>
      {isLoading ? <PageSpinner text="Идет поиск" /> : <Table />}
    </div>
  );
}
