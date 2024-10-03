'use client';

import { useState } from 'react';
import { Layout, Menu, Input, Dropdown, Avatar, Space } from 'antd';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UserOutlined,
  TeamOutlined,
  SearchOutlined,
  EditOutlined,
  FileSearchOutlined,
  LogoutOutlined,
} from '@ant-design/icons';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const { Header, Sider, Content, Footer } = Layout;
const { Search } = Input;

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [collapsed, setCollapsed] = useState(false);
  const router = useRouter();

  const handleSearch = (value: string) => {
    console.log('Searching for:', value);
    // Implement search functionality here
  };

  const handleMenuClick = (e: { key: string }) => {
    switch (e.key) {
      case 'profile':
        router.push('/admin/profile');
        break;
      case 'applications':
        router.push('/admin/applications');
        break;
      case 'logout':
        // Implement logout functionality here
        console.log('Logging out');
        router.push('/login');
        break;
    }
  };

  const userMenu = (
    <Menu onClick={handleMenuClick}>
      <Menu.Item key="profile" icon={<EditOutlined />}>
        Edit Profile
      </Menu.Item>
      <Menu.Item key="applications" icon={<FileSearchOutlined />}>
        View Applications
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key="logout" icon={<LogoutOutlined />}>
        Log Out
      </Menu.Item>
    </Menu>
  );

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
          items={[
            {
              key: '1',
              icon: <UserOutlined />,
              label: <Link href="/admin/client">Clients</Link>,
            },
            {
              key: '2',
              icon: <TeamOutlined />,
              label: <Link href="/admin/lawyer">Lawyers</Link>,
            },
          ]}
        />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: '#fff' }}>
          <div style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
            <div style={{ width: '200px', paddingLeft: '16px' }}>
              <img src="/logo.png" alt="Logo" style={{ height: '32px' }} />
            </div>
            <div style={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
              <Search
                placeholder="Search opportunities"
                onSearch={handleSearch}
                style={{ width: 400 }}
                prefix={<SearchOutlined />}
              />
            </div>
            <div style={{ paddingRight: '16px' }}>
              <Dropdown overlay={userMenu} trigger={['click']}>
                <a onClick={(e) => e.preventDefault()}>
                  <Space>
                    <Avatar icon={<UserOutlined />} />
                  </Space>
                </a>
              </Dropdown>
            </div>
          </div>
        </Header>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            background: '#fff',
          }}
        >
          {children}
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          ©2023 Legal Services Platform. All rights reserved.
        </Footer>
      </Layout>
    </Layout>
  );
}