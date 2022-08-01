import React from 'react';
import cn from 'classnames';
import { Typography } from 'antd';
import styles from './styles.module.scss';

const { Title } = Typography;

interface PlaceholderProps {
  className?: string;
  mode: 'goScan' | 'getData' | 'error';
}

const placeholderTextMapper = {
  goScan: (
    <>
      <Title className={styles.title} level={3}>
        Отсканируйте
        <br />
        <span className={styles.nobr}>штрих-код</span>
      </Title>
    </>
  ),
  getData: (
    <>
      <Title className={styles.title} level={3}>
        Загрузи базу
        <br />
        <span className={styles.nobr}>со штрих-кодами</span>
      </Title>
    </>
  ),
  error: (
    <>
      <Title className={styles.title} level={3}>
        Получен некорректный
        <br />
        <span className={styles.nobr}>или пустой штрих-код</span>
      </Title>
    </>
  ),
};

export function Placeholder(props: PlaceholderProps): JSX.Element {
  const { className, mode } = props;

  return (
    <div className={cn(styles.placeholder, className)}>
      {placeholderTextMapper[mode]}
    </div>
  );
}
