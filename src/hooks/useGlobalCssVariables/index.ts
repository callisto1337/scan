import { useEffect } from 'react';

/**
 * Хак для 100vh на экранах телефона (с учетом адресной строки браузера)
 */
export function useGlobalCssVariables(): void {
  useEffect(() => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);

    window.addEventListener('resize', () => {
      let vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    });
  }, []);
}
