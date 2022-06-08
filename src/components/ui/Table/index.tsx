import React from 'react';
import * as AtnD from 'antd';

export function Table(): JSX.Element {
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

  return (
    <AtnD.Table pagination={false} dataSource={dataSource} columns={columns} />
  );
}
