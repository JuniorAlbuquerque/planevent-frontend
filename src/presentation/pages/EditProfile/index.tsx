import React, { useCallback, useState, useEffect } from 'react';
import { Form } from '@unform/web';
import { Link, useRouteMatch } from 'react-router-dom';
import { useUpAndDel } from '../../../data/hooks/account';

import { Container, Wrapper, Header, Content, Row, ContentRow, Buttons } from './styles';
import { UserData } from '../../../data/protocols/user';

import api from '../../../infra/services/api';
import Sidebar from '../../components/Sidebar';
import Input from '../../components/Input';
import Select from '../../components/Select';
import Button from '../../components/Button';

import { AiOutlineDelete } from '../../styles/Icons';

interface UserId {
  id_user: string;
}

const EditProfile: React.FC = () => {
  const { updateUser, deleteUser } = useUpAndDel();
  const { params } = useRouteMatch<UserId>();
  const [userdata, setUserData] = useState<UserData>({} as UserData);
  const sextype = [{id: 0, type: 'Masculino'}, {id: 1, type: 'Feminino'}];

  const handleSubmit = useCallback(async (data: UserData) => {
    updateUser({
      id: data.id,
      name: data.name,
      email: data.email,
      password: data.password,
      birthdate: data.birthdate,
      sex: data.sex
    });
  }, [updateUser]);

  useEffect(() => {
    api.get(`/user/${params.id_user}`)
      .then(response => {
        setUserData(response.data);
      });
  }, [params.id_user]);

  return (
    <Container>
      <Sidebar />
      <Wrapper>
        <Header>
          <div>
            <Link to='/home'>
            {'< Home '}
            </Link>

            <h3>Gerenciar conta</h3>
          </div>

          <Button onClick={() => deleteUser(params.id_user)}>
            Excluir conta
            <AiOutlineDelete size={20}/>
          </Button>
        </Header>

        <Content>
          <Form onSubmit={handleSubmit}>
            <Row>
              <ContentRow>
                <label htmlFor="">Nome</label>
                <Input name="name" defaultValue={userdata.name} required/>
              </ContentRow>
            </Row>

            <Row>
              <ContentRow>
                <label htmlFor="">Email</label>
                <Input name="email" defaultValue={userdata.email} required/>
              </ContentRow>
            </Row>

            <Row>
              <ContentRow>
                <label htmlFor="">Nova Senha</label>
                <Input name="password" type="password" required/>
              </ContentRow>

              <Input type="hidden" name="id" defaultValue={userdata.id || undefined} />
            </Row>

            <Row>
              <ContentRow>
                <label htmlFor="type">Sexo</label>
                <Select name="sex" required>
                  {
                    sextype.map((item) =>
                      item.type === userdata.sex ?
                      <option selected defaultValue={item.type || undefined} key={item.id}>{item.type}</option> :
                      <option key={item.id} value={item.type || undefined}>{item.type}</option>
                    )
                  }
                </Select>
              </ContentRow>

              <ContentRow>
                <label htmlFor="">Data de nascimento</label>
                <Input name="birthdate" defaultValue={userdata.birthdate || undefined} type="date" required/>
              </ContentRow>
            </Row>

            <Buttons>
              <Button type="submit">
                Editar Dados
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

export default EditProfile;
