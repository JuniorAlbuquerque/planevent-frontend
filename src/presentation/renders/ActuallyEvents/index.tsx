import React from 'react';

import { Container, Card, CardHeader, CardBody, DateEvent, Local } from './styles';

import { FaSlideshare, GrDiamond } from '../../styles/Icons';

const ActuallyEvents: React.FC = () => {
  return (
    <Container>
      <Card>
        <CardHeader>
          <h2>PG Elias</h2>

          <FaSlideshare size={30} color={'var(--blueLight)'} />
        </CardHeader>

        <CardBody>
          <p>
            Pequeno grupo criado pelos membros da Igreja do Nogueira Júnior com o objetivo de estudar e aprender mais sobre a palavra de Deus
          </p>
        </CardBody>
      </Card>

      <Card>
        <CardHeader>
          <h2>Treinamento Desbravadores</h2>

          <GrDiamond className="exclusive" size={30} color={'var(--blueLight)'} />
        </CardHeader>

        <CardBody>
          <p>
          Orientações para o ministério dos desbravadores, tratamento de questões administrativas necessárias para o bom andamento da Igreja.
          Repassaremos o protótipo de calendário antecipado por nossa Associação e a ênfase que daremos em 2021.
          </p>

          <DateEvent>

          </DateEvent>

          <Local>

          </Local>
        </CardBody>
      </Card>
    </Container>
  );
}

export default ActuallyEvents;
