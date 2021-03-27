import React from 'react';
import Input from './Input';
import styles from './Input.module.css';

export default {
  title: 'UI/Input',
  component: Input,
  decorators: [(Story) => <div className={styles.Decorators}><Story /></div>],
};

export const Default = () => <Input />;
