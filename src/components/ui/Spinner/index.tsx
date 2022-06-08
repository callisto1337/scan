import React from 'react';
import { Spin } from '~node_modules/antd';
import styles from './styles.module.scss';

export interface SpinnerProps {
  text?: string;
}

export function Spinner(props: SpinnerProps): JSX.Element {
  const { text } = props;

  return (
    <span>
      {text && <span className={styles.text}>{text}</span>}
      <Spin className={styles.spinner} />
    </span>
  );
}
