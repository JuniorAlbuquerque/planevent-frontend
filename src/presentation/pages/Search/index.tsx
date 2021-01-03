import React, { useRef, useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';

import api from '../../../infra/services/api';
import Moment from 'moment';

import {
  Container,
  Header,
  Wrapper,
  Input,
  Content,
  Filter,
  ButtonSearch,
} from './styles';
import { FiFilter, FiSearch } from '../../styles/Icons';

import Sidebar from '../../components/Sidebar';
import CardEvent from '../../components/CardEvent';

import { Events as EventType } from '../../../data/protocols/events';

const Search: React.FC = () => {
  const inputRef = useRef<HTMLInputElement>({} as HTMLInputElement);
  const [inputType, setInputType] = useState('text');
  const [filter, setFilter] = useState('');
  const [eventsSearch, setEventsSearch] = useState<EventType[]>([]);

  function handleInputChange() {
    if (inputRef.current?.type === 'text') {
      inputRef.current.value = '';
      setFilter('');
      setInputType('date');
    }
    if (inputRef.current?.type === 'date') {
      inputRef.current.value = '';
      setFilter('');
      setInputType('text');
    }
  }

  async function handleSearchEvent (): Promise <void> {
    if (filter === '') {
      alert('Digite sua busca');
    } else {
      if (inputRef.current?.type === 'text') {
        await api.get<EventType[]>('event/filter', { params: {
          Name: filter
        }})
          .then(response => {
            setEventsSearch(response.data);
        });
      }

      if (inputRef.current?.type === 'date') {
        await api.get<EventType[]>('event/filter', {
          params: {
            Date: filter
          }
        })
          .then(response => {
            setEventsSearch(response.data);
        });
      }
    }
  }

  const getEvents = useCallback(() => {
    setFilter('');
    inputRef.current.value = '';

    api.get<EventType[]>('event')
    .then(response => {
      setEventsSearch(response.data);
    });
  }, []);

  useEffect(() => {
    getEvents();
  }, [getEvents]);

  return (
    <Container>
      <Sidebar />
      <Wrapper>
        <Header>
          <Link to='/home'>
          {'< Home '}
          </Link>

          <Input>
            <input
              ref={inputRef}
              type={inputType}
              placeholder="Buscar evento por nome"
              onChange={e => setFilter(e.target.value)}
            />

            <Filter onClick={handleInputChange}>
              <FiFilter size={30}/>
            </Filter>

            <ButtonSearch onClick={handleSearchEvent}>
              <FiSearch size={30} />
            </ButtonSearch>

            <button className="clear-filter" onClick={getEvents}>x</button>
          </Input>
        </Header>

        <Content>
          {
            eventsSearch.map(ev => (
            <CardEvent
              key={ev.id}
              id={ev.id}
              name={ev.name}
              description={ev.description}
              date={Moment(ev.date).format('DD/MM/YYYY')}
              local={ev.local}
              type={ev.type}
            />
            ))
          }
        </Content>
      </Wrapper>
    </Container>
  );
}

export default Search;
