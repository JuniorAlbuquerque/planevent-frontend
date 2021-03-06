import React, { useState, useEffect } from 'react';
import api from '../../../infra/services/api';
import { useAuth } from '../../../data/hooks/auth';
import Moment from 'moment';

import EmptyList from '../EmptyList';

import { Container } from './styles';
import Card from '../../components/Card';

interface Events {
  id: number;
  name: string;
  description: string;
  local: string;
  date: string;
  type: string;
}

const ActuallyEvents: React.FC = () => {
  const { user } = useAuth();
  const [eventsUser, setEventsUser] = useState<Events[]>([]);

  useEffect(() => {
    api.get<Events[]>(`/userevent/actually/${user.id}`)
    .then(response => {
        setEventsUser(response.data);
    })
  }, [user.id]);

  return (
    <>
     {eventsUser.length > 0 ?
      <Container>
        {
          eventsUser.map(ev => (
            <Card
              key={ev.id}
              name={ev.name}
              description={ev.description}
              date={Moment(ev.date).format('DD/MM/YYYY')}
              local={ev.local}
              type={ev.type}
            />
          ))
        }
      </Container> :
      <EmptyList />
    }
    </>
  );
}

export default ActuallyEvents;
