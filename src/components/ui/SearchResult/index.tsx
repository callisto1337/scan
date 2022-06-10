import React from 'react';
import { Table } from 'antd';

export function SearchResult(): JSX.Element {
  const dataSource = [
    {
      key: '1',
      value: 123123123,
      barCode: 'H012333333123123',
    },
    {
      key: '2',
      value: 123123123,
      barCode: 'H012333333123123',
    },
  ];

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

  return <Table pagination={false} dataSource={dataSource} columns={columns} />;
}
