import React, { useState } from 'react';

import { Container, Item } from './styles';

import ActuallyEvents from '../../renders/ActuallyEvents';
import NextEvents from '../../renders/NextEvents';
import CreatedEvents from '../../renders/CreatedEvents';

import { useShowComponent } from '../../../data/hooks/showcomponent';


export interface Props {
  active: boolean;
}

const Header: React.FC = () => {
  const [tabActive, setTabActive] = useState(0);
  const { setShowComponent } = useShowComponent();

  const tabs = [
    {
      id: 0,
      text: 'Em andamento',
      component: <ActuallyEvents />
    },
    {
      id: 1,
      text: 'Próximos',
      component: <NextEvents />
    },
    {
      id: 2,
      text: 'Cadastrados',
      component: <CreatedEvents />
    }
  ];

  function renderComponent(id: number, component: any) {
    setTabActive(id);
    setShowComponent(component);
  }

  const tabItem = tabs.map(tab => {
    return (
      <div key={tab.id}>
        <li>
          <Item
            onClick={() => renderComponent(tab.id, tab.component)}
            className="active"
            active={tabActive === tab.id ? true : false}
          >
            {tab.text}
          </Item>
        </li>
      </div>
    )
  });

  return (
    <Container>
      <h4>Eventos</h4>
      <ul>
        {tabItem}
      </ul>
    </Container>
  );
}

export default Header;
