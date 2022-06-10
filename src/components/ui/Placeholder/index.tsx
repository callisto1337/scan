import React from 'react';
import { Typography } from 'antd';
import PlaceholderImage from '~src/static/images/placeholder.svg';
import styles from './styles.module.scss';

const { Title } = Typography;

export function Placeholder(): JSX.Element {
  return (
    <div className={styles.placeholder}>
      <img className={styles.image} src={PlaceholderImage} alt="" />
      <Title className={styles.title} level={4}>
        Отсканируйте <span className={styles.nobr}>штрих-код</span>
      </Title>
    </div>
  );
}
