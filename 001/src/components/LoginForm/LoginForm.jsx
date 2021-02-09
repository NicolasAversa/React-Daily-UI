import React from 'react';
import PropTypes from 'prop-types';
import {
  Col, Form, Button, Input,
} from 'antd';
import styles from './LoginForm.module.css';
import FormInput from './FormInput/FormInput';

const propTypes = {
  onFinishFailed: PropTypes.func.isRequired,
};

function LoginForm({ onFinishFailed }) {
  const handleFinish = (values) => {
    console.log('Success:', values);
  };

  return (
    <Col xs={{ span: 22, offset: 1 }} sm={{ span: 16, offset: 4 }} md={{ span: 12, offset: 6 }} className={`${styles.LoginForm} p-3`}>
      <Form
        name="basic"
        initialValues={{
          remember: true,
        }}
        onFinish={handleFinish}
        onFinishFailed={onFinishFailed}
      >
        <FormInput type="username" />
        <FormInput type="email" />
        <FormInput type="password" />
        <Form.Item name="sdsdsds" className="mb-2">
          <Input
            bordered={false}
          />
        </Form.Item>
        <Form.Item>
          <Button block className={`${styles.LoginFormButton} p-2 mt-3`} htmlType="submit">
            Log in
          </Button>
        </Form.Item>
      </Form>
    </Col>
  );
}

LoginForm.propTypes = propTypes;

export default LoginForm;
