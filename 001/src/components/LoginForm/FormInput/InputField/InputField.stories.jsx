import React from 'react';
import InputField from './InputField';

export default {
  title: 'Login/LoginForm/FormInput/InputField',
  component: InputField,
};

// eslint-disable-next-line react/jsx-props-no-spreading
const Template = (args) => <InputField {...args} />;

export const Default = Template.bind({});
Default.args = {
  type: '',
};

export const Name = Template.bind({});
Name.args = {
  type: 'username',
};

export const Email = Template.bind({});
Email.args = {
  type: 'email',
};

export const Password = Template.bind({});
Password.args = {
  type: 'password',
};
