import React from 'react';
import { useScanBarCode } from '~src/hooks';
import { PageSpinner, SearchResult, Placeholder } from '~src/components/ui';
import products from '~src/data/products';
import { ProductInfo } from '~src/types/ProductInfo';
import styles from './styles.module.scss';

export function ScannerPage(): JSX.Element {
  const { barCode, isLoading } = useScanBarCode();
  const searchResult = products.data.filter(
    (item: ProductInfo) => item.barCode === barCode
  );

  if (isLoading) {
    return <PageSpinner text="Идет поиск" />;
  }

  if (barCode) {
    return <SearchResult data={searchResult} />;
  }

  return <Placeholder className={styles.placeholder} />;
}
