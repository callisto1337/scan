import React from 'react';
import { Table, Typography } from 'antd';
import { ProductInfo } from '~src/types/ProductInfo';
import styles from './styles.module.scss';

const { Title } = Typography;

interface DefaultSearchProps {
  data?: ProductInfo[];
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
      dataIndex: 'barCode',
      key: 'barCode',
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
      <Table
        locale={{ emptyText: 'Не найдено' }}
        pagination={false}
        dataSource={data}
        columns={columns}
      />
    </div>
  );
}

SearchResult.defaultProps = defaultProps;
