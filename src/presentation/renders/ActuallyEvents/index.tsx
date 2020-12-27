import React from 'react';

import { Container } from './styles';

import EmptyList from '../EmptyList';

const ActuallyEvents: React.FC = () => {
  var mostrar = 'sim';

  return (
    <Container>
      {
        mostrar === 'não' ? <EmptyList /> : <h1>Olá</h1>
      }
    </Container>
  );
}

export default ActuallyEvents;
