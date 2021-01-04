import React, { useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import Swal from 'sweetalert2';

import { Container, CardHead, CardBody, CardBodyInfo, Info, ButtonParticipate } from './styles';

import { Events as EventType } from '../../../data/protocols/events';

import api from '../../../infra/services/api';
import { useAuth } from '../../../data/hooks/auth';

import { FaSlideshare, GrDiamond, MdDateRange, GrLocation } from '../../styles/Icons';

const CardEvent: React.FC<EventType> = ({ id, name, description, date, local, type }) => {
  const { user } = useAuth();
  const history = useHistory();

  const handleAssociateEvent = useCallback(async () => {
    await api.post('/userevent/associate', { email: user.email, eventid: id })
      .then(response => {
        Swal.fire({
          title: 'Sucesso!',
          text: response.data.success.message,
          icon: 'success',
          confirmButtonText: 'Ok'
        }).then(() => {
          history.push('/home');
        });
      }).catch(error => {
        Swal.fire({
          title: 'Erro!',
          text: error.response.data.error.message,
          icon: 'error',
          confirmButtonText: 'Ok'
        });
      })
  }, [id, user.email, history]);

  return (
    <Container>
      <CardHead>
        <h2>{name}</h2>

        { type === 'Compartilhado' ?
          <FaSlideshare size={30} color={'var(--blueLight)'}/> :
          <GrDiamond className="exclusive" size={30} color={'var(--blueLight)'}/>
        }
      </CardHead>

      <CardBody>
        <p>
          {description}
        </p>
        <CardBodyInfo>
          <Info>
            <MdDateRange size={30} color={'var(--purple)'}/>
            <span>
              {date}
            </span>
          </Info>

          <Info>
            <GrLocation size={32} color={'var(--purple)'} />
            <span>
              {local}
            </span>
          </Info>
        </CardBodyInfo>
        <ButtonParticipate onClick={handleAssociateEvent}>
          Participar
        </ButtonParticipate>
      </CardBody>
    </Container>
  );
}

export default CardEvent;
