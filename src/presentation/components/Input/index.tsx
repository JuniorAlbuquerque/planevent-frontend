import React, { useEffect, useRef } from 'react';
import { InputProps } from '../../../data/protocols/input';
import { useField } from '@unform/core';

import { Container } from './styles';

const Input: React.FC<InputProps> = ({name, ...rest}) => {
  const { fieldName, defaultValue, error, registerField } = useField(name);
  const inputRef = useRef(null);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value'
    });
  }, [fieldName, registerField]);

  return (
    <Container {...rest} ref={inputRef}/>
  );
}

export default Input;
