import React from 'react';
import { useScanCode } from '~src/hooks';
import { PageSpinner, SearchResult, Placeholder } from '~src/components/ui';

export function ScannerPage(): JSX.Element {
  const { barCode, isLoading } = useScanCode();

  if (isLoading) {
    return <PageSpinner text="Идет поиск" />;
  }

  if (barCode) {
    return <SearchResult />;
  }

  return <Placeholder />;
}
