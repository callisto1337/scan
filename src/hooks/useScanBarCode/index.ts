import { useEffect, useRef, useState } from 'react';
import onScan from 'onscan.js';

const ON_SCAN_BUTTON = 0;
const ON_SCAN_BUTTON_ADDITIONAL = 120;
const PARSING_TIMEOUT_MS = 5000;

interface UseScanCodeReturn {
  barCode: string;
  isLoading: boolean;
}

export function useScanBarCode(): UseScanCodeReturn {
  const [barCode, setBarCode] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const parsingTimerId = useRef<number | null>(null);

  function stopTimer() {
    if (parsingTimerId?.current) {
      clearInterval(parsingTimerId.current);
      parsingTimerId.current = null;
    }
  }

  useEffect(() => {
    onScan.attachTo(document, {
      avgTimeByChar: 40,
      onScan: function (scannedBarcode: string) {
        if (scannedBarcode) {
          setIsLoading(false);
          // setBarcode(scannedBarcode);
          setBarCode('4690247000565');

          stopTimer();
        }
      },
      onKeyDetect: function (keyCode) {
        if (
          keyCode === ON_SCAN_BUTTON ||
          keyCode === ON_SCAN_BUTTON_ADDITIONAL
        ) {
          setIsLoading(true);
          setBarCode('');

          stopTimer();

          parsingTimerId.current = setTimeout(() => {
            setIsLoading(false);
          }, PARSING_TIMEOUT_MS) as unknown as number;
        }
      },
    });

    return () => {
      stopTimer();
      onScan?.detachFrom(document);
    };
  }, []);

  return {
    barCode,
    isLoading,
  };
}
