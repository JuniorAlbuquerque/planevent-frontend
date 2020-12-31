import React, { useEffect } from 'react';

import {
  Container,
  Wrapper,
  Content,
} from './styles';

import Sidebar from '../../components/Sidebar';
import Header from '../../components/Header';
import Actually from '../../renders/ActuallyEvents';

import { useShowComponent } from '../../../data/hooks/showcomponent';

export interface Props {
  active: boolean;
}

const Home: React.FC = () => {
  const { component, setShowComponent } = useShowComponent();

  useEffect(() => {
    setShowComponent(<Actually />);
  }, [setShowComponent]);

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
