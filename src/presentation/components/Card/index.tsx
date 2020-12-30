import React from 'react';

import { Container, CardHeader, CardBody, Info } from './styles';
import { FaSlideshare, GrDiamond, MdDateRange, GrLocation } from '../../styles/Icons';

interface EventCard {
  name: string;
  description: string;
  date: string;
  local: string;
  type: string;
}

const Card: React.FC<EventCard> = ({ name, description, date, local, type }) => {
  return (
    <Container>
        <CardHeader>
          <h2>{name}</h2>

          { type === 'Compartilhado' ?
            <FaSlideshare size={30} color={'var(--blueLight)'}/> :
            <GrDiamond className="exclusive" size={30} color={'var(--blueLight)'}/>
          }

        </CardHeader>

        <CardBody>
          <p>
            {description}
          </p>

          <Info>
            <MdDateRange size={30} color={'var(--purple)'}/>
            <span>
              {date}
            </span>
          </Info>

          <Info>
            <GrLocation size={32} color={'var(--purple)'} />
            <span>
              {local}
            </span>
          </Info>
        </CardBody>
    </Container>
  );
}

export default Card;
