import { useEffect, useState } from 'react';
import onScan from 'onscan.js';

const ON_SCAN_BUTTON = 0;

interface UseScanCodeReturn {
  barCode: string;
  isLoading: boolean;
}

export function useScanCode(): UseScanCodeReturn {
  const [barCode, setBarcode] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    onScan.attachTo(document, {
      reactToPaste: true,
      avgTimeByChar: 40,
      minLength: 0,
      onScan: function (scannedBarcode: string) {
        setIsLoading(false);
        setBarcode(scannedBarcode);
      },
      onKeyDetect: function (keyCode) {
        if (keyCode === ON_SCAN_BUTTON && !isLoading) {
          setIsLoading(true);
        }
      },
    });

    return () => {
      onScan?.detachFrom(document);
    };
  }, []);

  return {
    barCode,
    isLoading,
  };
}
