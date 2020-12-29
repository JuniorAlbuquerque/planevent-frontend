import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  margin: 0px 14px 20px;
  grid-gap: 30px;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  justify-items: baseline;
  justify-content: baseline;
  align-items: baseline;
  transition: 0.5s ease;

  @media(max-width: 986px) {
    justify-items: center;
    justify-content: center;
  }
`;

export const Card = styled.div`
  background: var(--primary);
  width: 340px;
  height: 400px;
  max-height: 100%;
  overflow: auto;

  border-radius: 10px;
  display: flex;
  flex-direction: column;

  color: var(--white);
  padding: 14px;

  /* width */
  ::-webkit-scrollbar {
    width: 10px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: var(--purpleLight);
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #5C54D9;
    transition: .3s ease-out;
  }
`;

export const CardHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-bottom: 8px;

  h2 {
    font-weight: 600;
  }

  .exclusive {
    width: 40px;

    path {
      stroke: var(--blueLight);
    }
  }
`;

export const CardBody = styled.div`
  display: flex;
  flex-direction: column;

  p {
    text-align: justify;
  }
`;

export const DateEvent = styled.div`

`;

export const Local = styled.div`

`;

