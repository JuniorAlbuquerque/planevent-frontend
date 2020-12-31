import React from 'react';

import { Container, CardHead, CardBody, CardBodyInfo, Info, ButtonParticipate } from './styles';

import { Events as EventType } from '../../../data/protocols/events';


import { FaSlideshare, GrDiamond, MdDateRange, GrLocation } from '../../styles/Icons';

const CardEvent: React.FC<EventType> = ({ id, name, description, date, local, type }) => {
  return (
    <Container>
      <CardHead>
        <h2>{name}</h2>

        { type === 'Compartilhado' ?
          <FaSlideshare size={30} color={'var(--blueLight)'}/> :
          <GrDiamond className="exclusive" size={30} color={'var(--blueLight)'}/>
        }
      </CardHead>

      <CardBody>
        <p>
          {description}
        </p>
        <CardBodyInfo>
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
        </CardBodyInfo>
        <ButtonParticipate>
          Participar
        </ButtonParticipate>
      </CardBody>
    </Container>
  );
}

export default CardEvent;
