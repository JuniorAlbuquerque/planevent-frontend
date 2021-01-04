import React from 'react';
import { Link } from 'react-router-dom';
import { useEvent } from '../../../data/hooks/event';

import { Container, CardHeader, CardBody, Info } from './styles';
import { FiInfo, BiEdit, AiOutlineDelete, MdDateRange, GrLocation } from '../../styles/Icons';

interface EventCard {
  id: number;
  name: string;
  description: string;
  date: string;
  local: string;
  type: string;
}

const CardCreated: React.FC<EventCard> = ({ id, name, description, date, local, type }) => {
  const { deleteEvent } = useEvent();

  return (
    <Container>
        <CardHeader>
          <h2>{name}</h2>

          <div style={{ display: 'flex' }}>
            <Link to={`/event/${id}`}>
              <BiEdit size={30} color={'#A2DE98'}/>
            </Link>
            <AiOutlineDelete onClick={() => deleteEvent(id)} className="exclusive" size={30} color={'var(--cancel)'}/>
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
