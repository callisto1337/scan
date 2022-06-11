import React from 'react';
import cn from 'classnames';
import { Typography } from 'antd';
import PlaceholderImage from '~src/static/images/placeholder.svg';
import styles from './styles.module.scss';

const { Title } = Typography;

interface PlaceholderProps {
  className?: string;
}

export function Placeholder(props: PlaceholderProps): JSX.Element {
  const { className } = props;

  return (
    <div className={cn(styles.placeholder, className)}>
      <img className={styles.image} src={PlaceholderImage} alt="" />
      <Title className={styles.title} level={3}>
        Отсканируйте
        <br />
        <span className={styles.nobr}>штрих-код</span>
      </Title>
    </div>
  );
}
