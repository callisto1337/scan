import React from 'react';
import { Spin, Typography } from 'antd';
import { useScanCode } from '~src/hocs';
import * as styles from './styles.module.scss';

const { Title } = Typography;

/**
 * TODO
 *
 * 1. Минимальная длина штрих-кода (либо формат)
 */

export function App(): JSX.Element {
  const { barCode, isReading } = useScanCode();

  return (
    <div className={styles.page}>
      <Title level={1} className={styles.title}>
        Штрих-код
      </Title>
      <Title level={3}>
        {isReading ? (
          <span className={styles.loader}>
            <Spin />
          </span>
        ) : (
          <span className={styles.bold}>{barCode || ''}</span>
        )}
      </Title>
    </div>
  );
}
