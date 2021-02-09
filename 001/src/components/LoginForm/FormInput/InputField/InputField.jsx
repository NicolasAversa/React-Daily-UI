import React from 'react';
import PropTypes from 'prop-types';
import { Input } from 'antd';
import { UserOutlined, MailOutlined, LockOutlined } from '@ant-design/icons';
import styles from './InputField.module.css';

const propTypes = {
  type: PropTypes.string,
};

const defaultProps = {
  type: 'username',
};

function InputField({ type }) {
  let prefix = null;
  switch (type) {
    case 'username':
      prefix = <UserOutlined className="m-2" />;
      break;
    case 'email':
      prefix = <MailOutlined className="m-2" />;
      break;
    case 'password':
      prefix = <LockOutlined className="m-2" />;
      break;
    default:
      prefix = <UserOutlined className="mr-1" />;
  }

  const capitalizeText = (text) => text.charAt(0).toUpperCase() + text.slice(1);

  return (
    <Input
      bordered={false}
      className={`${styles.InputField} p-0`}
      placeholder={capitalizeText(type)}
      prefix={prefix}
    />
  );
}

InputField.propTypes = propTypes;
InputField.defaultProps = defaultProps;

export default InputField;
