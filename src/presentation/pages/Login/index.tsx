import React from 'react';

import { Container, Content, Background } from './styles';

import logo from '../../../assets/logo.svg';
import logodark from '../../../assets/logo-dark.svg';
import planbg from '../../../assets/plan-art-bg.svg';

import { FiLogIn } from '../../styles/Icons';

import Input from '../../components/Input';
import Button from '../../components/Button';

const Login: React.FC = () => {
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

        <form action="">
          <label htmlFor="">E-mail</label>
          <Input name="email"/>

          <label htmlFor="">Senha</label>
          <Input name="password" type="password"/>

          <Button icon={FiLogIn}>Entrar</Button>

          <a href="forgot">Cadastre-se</a>
        </form>
      </Content>
    </Container>
  );
}

export default Login;
