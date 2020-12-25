import React from 'react';

import { Container, Content, Background } from './styles';

import logo from '../../../assets/logo.svg';
import logodark from '../../../assets/logo-dark.svg';
import planbg from '../../../assets/plan-art-bg.svg';

import { FiLogIn } from '../../styles/Icons';

import Input from '../../components/Input';
import Button from '../../components/Button';

const SignUp: React.FC = () => {
  return (
    <Container>
      <Background>
        <img src={logo} alt="Planevent"/>
        <img src={planbg} alt="Background Planevent"/>

        <p>Gerencie sua agenda aqui</p>
      </Background>
      <Content>
        <img src={logodark} alt="Planevent"/>

        <h1>Cadastro</h1>

        <form action="">
          <label htmlFor="nome">Nome</label>
          <Input name="nome"/>

          <label htmlFor="email">E-mail</label>
          <Input name="email"/>

          <label htmlFor="password">Senha</label>
          <Input name="password" type="password"/>

          <label htmlFor="datanascimento">Data de nascimento</label>
          <Input name="datanascimento" type="date"/>

          <label htmlFor="sexo">Sexo</label>
          <select name="sexo">
            <option value="A">Masculino</option>
            <option value="B">Feminino</option>
          </select>

          <Button icon={FiLogIn}>Entrar</Button>

          <a href="forgot">Fazer login</a>
        </form>
      </Content>
    </Container>
  );
}

export default SignUp;
