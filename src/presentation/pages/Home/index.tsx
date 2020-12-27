import React from 'react';

import {
  Container,
  Wrapper,
  Content,
} from './styles';

import Sidebar from '../../components/Sidebar';
import Header from '../../components/Header';

import { useShowComponent } from '../../../data/hooks/showcomponent';

export interface Props {
  active: boolean;
}

const Home: React.FC = () => {
  const { component } = useShowComponent();

  return (
    <Container>
      <Sidebar />
      <Wrapper>
        <Header />
        <Content>
          { component }
        </Content>
      </Wrapper>
    </Container>
  );
}

export default Home;
