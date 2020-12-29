import React from 'react';

import { Container } from './styles';

import nodata from '../../../assets/no-data.svg';

const EmptyList: React.FC = () => {
  return (
    <Container>
      <img src={nodata} alt="SEM EVENTOS"/>

      <p>Ops, você não está participando de nenhum evento no momento</p>

      <button>Procurar eventos?</button>
    </Container>
  );
}

export default EmptyList;
