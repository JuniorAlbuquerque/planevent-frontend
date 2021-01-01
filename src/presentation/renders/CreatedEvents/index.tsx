import React, { useEffect, useState } from 'react';
import { useAuth } from '../../../data/hooks/AuthContext';
import api from '../../../infra/services/api';
import Moment from 'moment';

import { Container } from './styles';
import CardCreated from '../../components/CardCreated';

import { Events } from '../../../data/protocols/events';

const CreatedEvents: React.FC = () => {
  const { user } = useAuth();
  const [eventsUser, setEventsUser] = useState<Events[]>([]);

  useEffect(() => {
    api.get<Events[]>(`/event/user/${user.id}`)
    .then(response => {
        setEventsUser(response.data);
    })
  }, [user.id]);

  return (
    <Container>
      {
        eventsUser.map(ev => (
          <CardCreated
            key={ev.id}
            name={ev.name}
            description={ev.description}
            date={Moment(ev.date).format('DD/MM/YYYY')}
            local={ev.local}
            type={ev.type}
          />
        ))
      }
    </Container>
  );
}

export default CreatedEvents;
