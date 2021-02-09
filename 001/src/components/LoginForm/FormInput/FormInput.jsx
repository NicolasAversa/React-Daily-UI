import React from 'react';
import PropTypes from 'prop-types';
import { Form } from 'antd';
import InputField from './InputField/InputField';

const propTypes = {
  type: PropTypes.string.isRequired,
};

function FormInput({ type }) {
  return (
    <Form.Item name={type} className="mb-2">
      <InputField type={type} />
    </Form.Item>
  );
}

FormInput.propTypes = propTypes;

export default FormInput;
