import React from 'react';
import { Typography } from '~node_modules/antd';
import { useScanCode } from '~src/hooks';
import { PageSpinner, SearchResult } from '~src/components/ui';
import PlaceholderImage from '~src/static/images/placeholder.svg';
import styles from './styles.module.scss';

const { Title } = Typography;

export function ScannerPage(): JSX.Element {
  const { barCode, isLoading } = useScanCode();

  if (isLoading) {
    return <PageSpinner text="Идет поиск" />;
  }

  if (barCode) {
    return <SearchResult />;
  }

  return (
    <div className={styles.welcome}>
      <img className={styles.placeholder} src={PlaceholderImage} alt="" />
      <Title className={styles.title} level={4}>
        Отсканируйте <span className={styles.nobr}>штрих-код</span>
      </Title>
    </div>
  );
}
