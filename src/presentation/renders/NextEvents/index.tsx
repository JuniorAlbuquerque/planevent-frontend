import React from 'react';

import { Container } from './styles';

import Card from '../../components/Card';
import EmptyList from '../EmptyList';

const NextEvents: React.FC = () => {
  return (
    <EmptyList />

    // <Container>
    //     <Card
    //     name='PG Elias'
    //     description='Pequeno grupo criado pelos membros da Igreja do Nogueira Júnior com o objetivo de estudar e aprender mais sobre a palavra de Deus'
    //     date='14/12/2020'
    //     local= 'Rua Eduardo Ribeiro, nº 3895, Jauary 2'
    //     type='Compartilhado'
    //   />
    // </Container>
  );
}

export default NextEvents;
