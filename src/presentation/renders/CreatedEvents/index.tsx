import React, { useEffect, useState, useCallback } from 'react';
import { useAuth } from '../../../data/hooks/auth';
import { useShowComponent } from '../../../data/hooks/showcomponent';
import api from '../../../infra/services/api';
import Moment from 'moment';

import { Container } from './styles';
import CardCreated from '../../components/CardCreated';

import { Events } from '../../../data/protocols/events';

const CreatedEvents: React.FC = () => {
  const { user } = useAuth();
  const { render, setRender } = useShowComponent();
  const [eventsUser, setEventsUser] = useState<Events[]>([]);

  const renderAgain = useCallback(async () => {
    if (render) {
      await api.get<Events[]>(`/event/user/${user.id}`)
      .then(response => {
          setEventsUser(response.data);
      });

      setRender(false);
    }
  }, [render, setRender, user.id]);

  useEffect(() => {
    api.get<Events[]>(`/event/user/${user.id}`)
    .then(response => {
        setEventsUser(response.data);
    });

    renderAgain();
  }, [user.id, renderAgain]);

  return (
    <Container>
      {
        eventsUser.map(ev => (
          <CardCreated
            key={ev.id}
            id={ev.id}
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
