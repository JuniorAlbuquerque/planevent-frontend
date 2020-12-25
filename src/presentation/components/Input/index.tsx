import React from 'react';
import { InputProps } from '../../../data/protocols/input';

import { Container } from './styles';

const Input: React.FC<InputProps> = (props) => {
  return (
    <Container {...props} />
  );
}

export default Input;
