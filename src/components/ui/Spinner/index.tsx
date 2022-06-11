import React from 'react';
import { Spin } from '~node_modules/antd';
import { LoadingOutlined } from '@ant-design/icons';
import styles from './styles.module.scss';

const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

export interface SpinnerProps {
  text?: string;
}

export function Spinner(props: SpinnerProps): JSX.Element {
  const { text } = props;

  return (
    <span>
      {text && <span className={styles.text}>{text}</span>}
      <Spin className={styles.spinner} indicator={antIcon} />
    </span>
  );
}
