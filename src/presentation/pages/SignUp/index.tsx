import React, { useCallback } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Form } from '@unform/web';
import Swal from 'sweetalert2';

import api from '../../../infra/services/api';

import logo from '../../../assets/logo.svg';
import logodark from '../../../assets/logo-dark.svg';
import planbg from '../../../assets/plan-art-bg.svg';

import { FiLogIn } from '../../styles/Icons';

import Input from '../../components/Input';
import Button from '../../components/Button';
import Select from '../../components/Select';

import { Container, Content, Background } from './styles';

const SignUp: React.FC = () => {
  const history = useHistory();

  const handleSubmit = useCallback(async (data: object) => {
    try {
      await api.post('/user', data);
      Swal.fire({
        title: 'Sucesso!',
        text: 'Usuário cadastrado com sucesso!',
        icon: 'success',
        confirmButtonText: 'Ok'
      });
      history.push('/');
    } catch (error) {
      Swal.fire({
        title: 'Erro!',
        text: 'Alguma coisa ocorreu de forma inesperada!',
        icon: 'error',
        confirmButtonText: 'Ok'
      });
    }
  }, [history]);

  return (
    <Container>
      <Background>
        <img src={logo} alt="Planevent"/>
        <img src={planbg} alt="Background Planevent"/>

        <p>Gerencie sua agenda aqui</p>
      </Background>
      <Content>
        {/* <img src={logodark} alt="Planevent"/> */}

        <h1>Cadastro</h1>

        <Form onSubmit={handleSubmit}>
          <label htmlFor="name">Nome</label>
          <Input name="name" required/>

          <label htmlFor="email">E-mail</label>
          <Input name="email" type="email" required/>

          <label htmlFor="password">Senha</label>
          <Input name="password" required type="password"/>

          <label htmlFor="datanascimento">Data de nascimento</label>
          <Input name="birthdate" type="date"/>

          <label htmlFor="sexo">Sexo</label>
          <Select name="sex">
            <option value="Masculino">Masculino</option>
            <option value="Feminino">Feminino</option>
          </Select>

          <Button icon={FiLogIn}>Cadastrar</Button>

          <Link to="/">Fazer login</Link>
        </Form>
      </Content>
    </Container>
  );
}

export default SignUp;
