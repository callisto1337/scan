import React from 'react';
import { useScanBarCode } from '~src/hooks';
import { PageSpinner, SearchResult, Placeholder } from '~src/components/ui';
import { ProductInfo, ProductsData } from '~src/types/ProductsData';
import useLocalStorage from '~node_modules/use-local-storage';
import { LS_DATA_NAME } from '~src/shared/constants';
import styles from './styles.module.scss';

export function ScannerPage(): JSX.Element {
  const [storageData] = useLocalStorage<ProductsData | null>(
    LS_DATA_NAME,
    null
  );
  const isScannerDisabled = !storageData;
  const { barCode, isLoading, hasError } = useScanBarCode({
    disabled: isScannerDisabled,
  });
  const searchResult = storageData?.data?.filter(
    (item: ProductInfo) => item.barCode === barCode
  );
  function getCurrentMode(): 'error' | 'getData' | 'goScan' {
    if (hasError) {
      return 'error';
    }

    return storageData ? 'goScan' : 'getData';
  }

  if (isLoading) {
    return <PageSpinner text="Идет поиск" />;
  }

  if (barCode) {
    return <SearchResult data={searchResult} />;
  }

  return <Placeholder className={styles.placeholder} mode={getCurrentMode()} />;
}
