import React from 'react';
import { TabBar } from '~src/components/ui';
import styles from './styles.module.scss';

interface MainTemplateProps {
  children?: React.ReactNode;
}

export function MainTemplate(props: MainTemplateProps): JSX.Element {
  const { children } = props;

  return (
    <main className={styles.mainTemplate}>
      <div className={styles.content}>{children}</div>
      <TabBar className={styles.tabBar} />
    </main>
  );
}
