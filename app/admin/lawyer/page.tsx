'use client';

import { Table, Card, Button } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Specialization',
    dataIndex: 'specialization',
    key: 'specialization',
  },
  {
    title: 'Years of Experience',
    dataIndex: 'experience',
    key: 'experience',
  },
];

const data = [
  {
    key: '1',
    name: 'Alice Johnson',
    specialization: 'Corporate Law',
    experience: 10,
  },
  {
    key: '2',
    name: 'Bob Smith',
    specialization: 'Criminal Law',
    experience: 15,
  },
  {
    key: '3',
    name: 'Carol Williams',
    specialization: 'Family Law',
    experience: 8,
  },
];

export default function LawyerPage() {
  return (
    <Card
      title="Lawyer Management"
      extra={
        <Button type="primary" icon={<PlusOutlined />}>
          Add Lawyer
        </Button>
      }
    >
      <Table columns={columns} dataSource={data} />
    </Card>
  );
}