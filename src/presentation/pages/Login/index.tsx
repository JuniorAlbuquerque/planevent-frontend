import React, { useCallback } from 'react';
import { Form } from '@unform/web';

import { Container, Content, Background } from './styles';

import logo from '../../../assets/logo.svg';
import logodark from '../../../assets/logo-dark.svg';
import planbg from '../../../assets/plan-art-bg.svg';

import { useAuth } from '../../../data/hooks/AuthContext';

import { FiLogIn } from '../../styles/Icons';

import Input from '../../components/Input';
import Button from '../../components/Button';

export interface SignInCredentials {
  email: string;
  password: string;
}

const Login: React.FC = () => {
  const { signIn } = useAuth();
  const handleSubmit = useCallback(async (data: SignInCredentials) => {
    signIn({
      email: data.email,
      password: data.password
    })
  }, [signIn]);

  return (
    <Container>
      <Background>
        <img src={logo} alt="Planevent"/>
        <img src={planbg} alt="Background Planevent"/>

        <p>Gerencie sua agenda aqui</p>
      </Background>
      <Content>
        <img src={logodark} alt="Planevent"/>

        <h1>Login</h1>

        <Form onSubmit={handleSubmit}>
          <label htmlFor="">E-mail</label>
          <Input name="email"/>

          <label htmlFor="">Senha</label>
          <Input name="password" type="password"/>

          <Button icon={FiLogIn}>Entrar</Button>

          <a href="forgot">Cadastre-se</a>
        </Form>
      </Content>
    </Container>
  );
}

export default Login;
