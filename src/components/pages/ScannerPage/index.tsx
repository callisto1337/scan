import React, { useMemo } from 'react';
import { useScanCode } from '~src/hooks';
import { PageSpinner, SearchResult, Placeholder } from '~src/components/ui';
import { barcodes } from '~src/data/barcodes';
import { getNormalizedBarcodes } from '~src/utils/getNormalizedBarcodes';
import styles from './styles.module.scss';

export function ScannerPage(): JSX.Element {
  const { barcode, isLoading } = useScanCode();
  const normalizedBarcodes = useMemo(
    () => getNormalizedBarcodes(barcodes),
    [barcodes]
  );
  const searchResult = normalizedBarcodes.filter(
    (item) => item.barcode === barcode
  );

  if (isLoading) {
    return <PageSpinner text="Идет поиск" />;
  }

  if (barcode) {
    return <SearchResult data={searchResult} />;
  }

  return <Placeholder className={styles.placeholder} />;
}
