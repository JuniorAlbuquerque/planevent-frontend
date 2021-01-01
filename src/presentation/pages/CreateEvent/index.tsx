import React, { useCallback } from 'react';
import { Form } from '@unform/web';
import { Link, useHistory } from 'react-router-dom';

import api from '../../../infra/services/api';
import { useAuth } from '../../../data/hooks/AuthContext';

import Sidebar from '../../components/Sidebar';
import Input from '../../components/Input';
import Select from '../../components/Select';
import Button from '../../components/Button';

import { Container, Wrapper, Header, Content, Row, ContentRow, Buttons } from './styles';

const CreateEvent: React.FC = () => {
  const { user } = useAuth();
  const history = useHistory();

  const handleSubmit = useCallback(async (data: object) => {
      await api.post('/event', data).then(() => {
        alert('Evento criado com sucesso');
        history.push('/home');
      }).catch(error => {
        alert(error.response.data.error.message)
      });
  }, []);

  return (
    <Container>
      <Sidebar />
      <Wrapper>
        <Header>
          <Link to='/home'>
          {'< Home '}
          </Link>

          <h3>Criar Novo Evento</h3>
        </Header>

        <Content>
          <Form onSubmit={handleSubmit}>
            <Row>
              <ContentRow>
                <label htmlFor="">Nome</label>
                <Input name="name" required/>
              </ContentRow>

              <ContentRow>
                <label htmlFor="type">Tipo</label>
                <Select name="type" required>
                  <option value="Compartilhado">Compartilhado</option>
                  <option value="Exclusivo">Exclusivo</option>
                </Select>
              </ContentRow>

              <ContentRow>
                <label htmlFor="date">Data</label>
                <Input name="date" required type="date"/>
              </ContentRow>
            </Row>

            <Row>
              <ContentRow>
                <label htmlFor="">Descrição</label>
                <Input name="description" required/>
              </ContentRow>
            </Row>

            <Row>
              <ContentRow>
                <label htmlFor="">Local</label>
                <Input name="local" required/>
              </ContentRow>

              <Input type="hidden" name="userid" value={user.id} />
            </Row>

            <Buttons>
              <Button type="submit">
                Criar Evento
              </Button>

              <Link to='/home'>
                Cancelar
              </Link>
            </Buttons>
          </Form>
        </Content>
      </Wrapper>
    </Container>
  );
}

export default CreateEvent;
