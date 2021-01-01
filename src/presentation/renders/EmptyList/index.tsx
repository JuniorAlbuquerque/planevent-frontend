import React from 'react';
import { Link } from 'react-router-dom';

import { Container } from './styles';

import nodata from '../../../assets/no-data.svg';

const EmptyList: React.FC = () => {
  return (
    <Container>
      <img src={nodata} alt="SEM EVENTOS"/>

      <p>Ops, você não está participando de nenhum evento no momento</p>

      <Link to='/search'>
        <button>Procurar eventos?</button>
      </Link>
    </Container>
  );
}

export default EmptyList;
