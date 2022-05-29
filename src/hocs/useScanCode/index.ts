import { useEffect, useRef, useState } from 'react';
import onScan from 'onscan.js';

const ON_SCAN_BUTTON = 0;
const ON_SCAN_BUTTON_ADDITIONAL = 120;
const PARSING_TIMEOUT_MS = 5000;

interface UseScanCodeReturn {
  barCode: string;
  isReading: boolean;
}

export function useScanCode(): UseScanCodeReturn {
  const [barCode, setBarcode] = useState<string>('');
  const [isReading, setIsReading] = useState<boolean>(false);
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
          setIsReading(false);
          setBarcode(scannedBarcode);

          stopTimer();
        }
      },
      onKeyDetect: function (keyCode) {
        if (
          keyCode === ON_SCAN_BUTTON ||
          keyCode === ON_SCAN_BUTTON_ADDITIONAL
        ) {
          setIsReading(true);
          setBarcode('');

          stopTimer();

          parsingTimerId.current = setTimeout(() => {
            setIsReading(false);
          }, PARSING_TIMEOUT_MS);
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
    isReading,
  };
}
