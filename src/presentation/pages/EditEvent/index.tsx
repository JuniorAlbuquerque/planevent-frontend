import React, { useCallback, useState, useEffect } from 'react';
import { Form } from '@unform/web';
import { Link, useRouteMatch } from 'react-router-dom';
import Moment from 'moment';
import Swal from 'sweetalert2';
import { useEvent } from '../../../data/hooks/event';

import api from '../../../infra/services/api';
import Sidebar from '../../components/Sidebar';
import Input from '../../components/Input';
import Select from '../../components/Select';
import Button from '../../components/Button';

import { Events } from '../../../data/protocols/events';

import {
  Container,
  Wrapper,
  Header,
  Content,
  Row,
  ContentRow,
  Buttons,
  Table
} from './styles';

interface EventId {
  id_event: string;
}

interface EventInteface extends Events {
  userEventModels: object;
}

interface Participants {
  userid: number,
  user: {
    id: number,
    name: string,
    email: string,
  },
}

const EditEvent: React.FC = () => {
  const { params } = useRouteMatch<EventId>();
  const [eventdata, setEventData] = useState<EventInteface>({} as EventInteface);
  const [participants, setParticipants] = useState<Participants[]>([]);
  const eventtype = [{id: 0, type: 'Compartilhado'}, {id: 1, type: 'Exclusivo'}];

  const { updateEvent } = useEvent();
  const handleLoadingData = useCallback(() => {
    api.get(`/event/${params.id_event}`)
      .then(response => {
        setEventData(response.data);
        setParticipants(response.data.userEventModels);
    });
  }, [params.id_event]);

  const handleData = useCallback(async (data: Events) => {
    await updateEvent({
      id: data.id,
      name: data.name,
      description: data.description,
      local: data.local,
      type: data.type,
      date: data.date
    });

    handleLoadingData();
  }, [updateEvent, handleLoadingData]);

  const handleAssociate = useCallback(() => {
    Swal.fire({
      title: 'Informe o e-mail do participante',
      input: 'text',
      inputAttributes: {
        autocapitalize: 'off'
      },
      showCancelButton: true,
      confirmButtonText: 'Adicionar',
      cancelButtonText: 'Cancelar',
      showLoaderOnConfirm: true,
      preConfirm: async (email) => {
        try {
          const response = await api.post('userevent/associate', { email, eventid: eventdata.id });
          Swal.fire({
            title: 'Sucesso!',
            text: response.data.success.message,
            icon: 'success',
            confirmButtonText: 'Ok'
          }).then(() => {
            handleLoadingData();
          });
        } catch (error) {
          Swal.fire({
            title: 'Erro!',
            text: error.response.data.error.message,
            icon: 'error',
            confirmButtonText: 'Ok'
          });
        }
      },
      allowOutsideClick: () => !Swal.isLoading()
    })
  }, [eventdata.id, handleLoadingData]);

  useEffect(() => {
    handleLoadingData();
  }, [handleLoadingData]);

  return (
    <Container>
      <Sidebar />
      <Wrapper>
        <Header>
          <div>
            <Link to='/home'>
            {'< Home '}
            </Link>

            <h3>Editar evento: {eventdata.name}</h3>
          </div>
        </Header>
        <Content>
          <Form onSubmit={handleData}>
            <Row>
              <ContentRow>
                <label htmlFor="">Nome</label>
                <Input name="name" defaultValue={eventdata.name || undefined} required/>

                <Input type="hidden" name="id" value={eventdata.id || undefined} />
              </ContentRow>

              <ContentRow>
                <label htmlFor="type">Tipo</label>
                <Select name="type" defaultValue={eventdata.type || undefined} required>
                  {
                    eventtype.map((item) =>
                      item.type === eventdata.type ?
                      <option selected defaultValue={item.type || undefined} key={item.id}>{item.type}</option> :
                      <option key={item.id} value={item.type || undefined}>{item.type}</option>
                    )
                  }
                </Select>
              </ContentRow>

              <ContentRow>
                <label htmlFor="date">Data</label>
                <Input name="date" defaultValue={Moment(eventdata.date).format('YYYY-MM-DD') || undefined} required type="date"/>
              </ContentRow>
            </Row>

            <Row>
              <ContentRow>
                <label htmlFor="">Descrição</label>
                <Input name="description" defaultValue={eventdata.description || undefined} required/>
              </ContentRow>
            </Row>

            <Row>
              <ContentRow>
                <label htmlFor="">Local</label>
                <Input name="local" defaultValue={eventdata.local || undefined} required/>
              </ContentRow>
            </Row>

            <Buttons>
              <Button type="submit">
                Salvar alterações
              </Button>

              <Link to='/home'>
                Cancelar
              </Link>
            </Buttons>
          </Form>

          <Table>
            <div>
              <h3>Participantes</h3>
              <button onClick={handleAssociate}>
                Adicionar participante
              </button>
            </div>

            <table>
              <thead>
                <tr>
                  <th>Nome</th>
                  <th>E-mail</th>
                </tr>
              </thead>
              <tbody>
                {participants.map(part =>
                  <tr key={part.userid}>
                    <td>{part.user.name}</td>
                    <td>{part.user.email}</td>
                  </tr>
                )}
              </tbody>
            </table>
          </Table>
        </Content>
      </Wrapper>
    </Container>
  );
}

export default EditEvent;
