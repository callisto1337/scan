import React from 'react';
import { Table, Typography } from 'antd';
import { NormalizedBarcode } from '~src/utils';
import styles from './styles.module.scss';

const { Title } = Typography;

interface DefaultSearchProps {
  data?: NormalizedBarcode[];
}

interface SearchResultProps extends DefaultSearchProps {}

const defaultProps: DefaultSearchProps = {
  data: [],
};

export function SearchResult(props: SearchResultProps): JSX.Element {
  const { data } = props;

  const columns = [
    {
      title: 'Штрих-код',
      dataIndex: 'barcode',
      key: 'barcode',
    },
    {
      title: 'Значение',
      dataIndex: 'value',
      key: 'value',
    },
  ];

  return (
    <div>
      <Title level={4} className={styles.title}>
        Результаты поиска
      </Title>
      <Table pagination={false} dataSource={data} columns={columns} />
    </div>
  );
}

SearchResult.defaultProps = defaultProps;
