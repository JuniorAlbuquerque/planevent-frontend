import React from 'react';
import { useAuth } from '../../../data/hooks/AuthContext';
import { Link } from 'react-router-dom';

import { Container, Buttons, Button, Icon, Profile } from './styles';

import logodark from '../../../assets/logo-dark.svg';
import avatar from '../../../assets/avatar.svg';

import { MdAdd, FiSearch } from '../../styles/Icons';

const Sidebar: React.FC = () => {
  const { user, signOut } = useAuth();

  return (
    <Container>
      <img src={logodark} alt="Planevent"/>

      <Buttons>
        <Button>
            <span>
              Novo evento
            </span>
          <Link to='/createevent'>
            <Icon>
              <MdAdd size={24}/>
            </Icon>
          </Link>
        </Button>

        <Button>
          <span>
            Buscar eventos
          </span>

          <Link to='/search'>
            <Icon>
              <FiSearch size={24}/>
            </Icon>
          </Link>
        </Button>
      </Buttons>


      <Profile>
        <img src={avatar} alt="Perfil"/>

        <p>{user.name}</p>

        <div>
          <a href="profile">Editar perfil</a>
          <button onClick={signOut}>Sair</button>
        </div>
      </Profile>
    </Container>
  );
}

export default Sidebar;
