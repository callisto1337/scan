import React from 'react';
import { Spinner, SpinnerProps } from '~src/components/ui';
import styles from './styles.module.scss';

interface PageSpinnerProps extends SpinnerProps {}

export function PageSpinner(props: PageSpinnerProps): JSX.Element {
  const { text } = props;

  return (
    <div className={styles.pageSpinner}>
      <Spinner text={text} />
    </div>
  );
}
