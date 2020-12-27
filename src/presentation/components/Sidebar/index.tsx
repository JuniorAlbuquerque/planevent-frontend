import React from 'react';

import { Container, Buttons, Button, Icon, Profile } from './styles';

import logodark from '../../../assets/logo-dark.svg';
import avatar from '../../../assets/avatar.svg';

import { MdAdd, FiSearch } from '../../styles/Icons';

const Sidebar: React.FC = () => {
  return (
    <Container>
      <img src={logodark} alt="Planevent"/>

      <Buttons>
        <Button>
          <span>
            Novo evento
          </span>

          <Icon>
            <MdAdd size={24}/>
          </Icon>
        </Button>

        <Button>
          <span>
            Buscar eventos
          </span>

          <Icon>
            <FiSearch size={24}/>
          </Icon>
        </Button>
      </Buttons>


      <Profile>
        <img src={avatar} alt="Perfil"/>

        <p>Júnior Albuquerque</p>

        <a href="profile">Gerenciar conta</a>
      </Profile>
    </Container>
  );
}

export default Sidebar;
