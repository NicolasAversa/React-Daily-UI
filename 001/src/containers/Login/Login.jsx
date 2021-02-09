import React from 'react';
import { Row } from 'antd';
import LoginForm from '../../components/LoginForm/LoginForm';

function Login() {
  const handleFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Row gutter={8}>
      <LoginForm onFinishFailed={handleFinishFailed} />
    </Row>
  );
}

export default Login;
