import React from 'react';

import { Container, CardHeader, CardBody, Info } from './styles';
import { FiInfo, BiEdit, AiOutlineDelete, MdDateRange, GrLocation } from '../../styles/Icons';

interface EventCard {
  name: string;
  description: string;
  date: string;
  local: string;
  type: string;
}

const CardCreated: React.FC<EventCard> = ({ name, description, date, local, type }) => {
  return (
    <Container>
        <CardHeader>
          <h2>{name}</h2>

          <div style={{ display: 'flex' }}>
            <BiEdit size={30} color={'#A2DE98'}/>
            <AiOutlineDelete className="exclusive" size={30} color={'var(--cancel)'}/>
          </div>
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

          <Info>
            <FiInfo size={32} color={'var(--purple)'} />
            <span>
              {type}
            </span>
          </Info>
        </CardBody>
    </Container>
  );
}

export default CardCreated;
