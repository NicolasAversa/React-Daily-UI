import React from 'react';
import { Layout } from 'antd';
import Login from '../Login/Login';

const { Content } = Layout;

function App() {
  return (
    <Layout>
      <Content>
        <Login />
      </Content>
    </Layout>
  );
}

export default App;
