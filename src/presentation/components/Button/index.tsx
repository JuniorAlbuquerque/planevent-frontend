import React from 'react';
import { ButtonProps } from '../../../data/protocols/button';

import { Container } from './styles';

const Button: React.FC<ButtonProps> = ({ icon: Icon, children, ...rest }) => {
  return (
    <Container {...rest}>
      {Icon && <Icon size={20} />}
      {children}
    </Container>
  );
}

export default Button;
