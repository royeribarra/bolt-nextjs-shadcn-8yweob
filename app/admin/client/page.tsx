'use client';

import { useState, useEffect } from 'react';
import { Table, Card, Button } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Email',
    dataIndex: 'email',
    key: 'email',
  },
  {
    title: 'Phone',
    dataIndex: 'phone',
    key: 'phone',
  },
];

const initialData = [
  {
    key: '1',
    name: 'John Brown',
    email: 'john@example.com',
    phone: '(555) 555-1234',
  },
  {
    key: '2',
    name: 'Jim Green',
    email: 'jim@example.com',
    phone: '(555) 555-5678',
  },
  {
    key: '3',
    name: 'Joe Black',
    email: 'joe@example.com',
    phone: '(555) 555-9012',
  },
];

export default function ClientPage() {
  const [data, setData] = useState(initialData);

  useEffect(() => {
    // Here you would typically fetch data from an API
    // For now, we're just using the initial data
    setData(initialData);
  }, []);

  return (
    <Card
      title="Client Management"
      extra={
        <Button type="primary" icon={<PlusOutlined />}>
          Add Client
        </Button>
      }
    >
      <Table columns={columns} dataSource={data} />
    </Card>
  );
}