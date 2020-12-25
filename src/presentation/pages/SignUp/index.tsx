import React from 'react';
import { Form } from '@unform/web';

import logo from '../../../assets/logo.svg';
import logodark from '../../../assets/logo-dark.svg';
import planbg from '../../../assets/plan-art-bg.svg';

import { FiLogIn } from '../../styles/Icons';

import Input from '../../components/Input';
import Button from '../../components/Button';
import Select from '../../components/Select';

import { Container, Content, Background } from './styles';

const SignUp: React.FC = () => {

  function handleSubmit(data: object): void {
    console.log(data);
  }

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

        <Form onSubmit={handleSubmit}>
          <label htmlFor="nome">Nome</label>
          <Input name="nome"/>

          <label htmlFor="email">E-mail</label>
          <Input name="email"/>

          <label htmlFor="password">Senha</label>
          <Input name="password" type="password"/>

          <label htmlFor="datanascimento">Data de nascimento</label>
          <Input name="datanascimento" type="date"/>

          <label htmlFor="sexo">Sexo</label>
          <Select name="sexo">
            <option value="Masculino">Masculino</option>
            <option value="Feminino">Feminino</option>
          </Select>

          <Button icon={FiLogIn}>Cadastrar</Button>

          <a href="forgot">Fazer login</a>
        </Form>
      </Content>
    </Container>
  );
}

export default SignUp;
