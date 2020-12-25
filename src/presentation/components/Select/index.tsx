import React, { useEffect, useRef } from 'react';
import { SelectProps } from '../../../data/protocols/select';
import { useField } from '@unform/core';

import { Container } from './styles';

const Select: React.FC<SelectProps> = ({ name, ...rest}) => {
  const { fieldName, defaultValue, error, registerField } = useField(name);
  const selectRef = useRef(null);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: selectRef.current,
      path: 'value'
    });
  }, [fieldName, registerField]);

  return (
    <Container {...rest} ref={selectRef} />
  );
}

export default Select;
