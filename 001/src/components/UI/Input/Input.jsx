import React from 'react';
import PropTypes from 'prop-types';
import { UserOutlined } from '@ant-design/icons';
import styles from './Input.module.css';

const propTypes = {
  name: PropTypes.string,
};

const defaultProps = {
  name: 'username',
};

function Input({ name }) {
  return (
    <div className={`${styles.InputWrapper} d-flex mb-1`}>
      <UserOutlined className="m-2" />
      <input type="text" name={name} id={name} className={styles.Input} />
    </div>
  );
}

Input.propTypes = propTypes;
Input.defaultProps = defaultProps;

export default Input;
