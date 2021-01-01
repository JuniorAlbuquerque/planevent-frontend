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
