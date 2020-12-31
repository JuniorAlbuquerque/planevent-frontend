import styled from 'styled-components';

export const Container = styled.div`
  background: var(--primary);
  width: 100%;
  height: auto;
  overflow: auto;

  border-radius: 10px;
  display: flex;
  flex-direction: column;

  color: var(--white);
  padding: 14px;

  margin-bottom: 14px;
`;

export const CardHead = styled.div`
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
    margin-bottom: 14px;
  }
`;

export const CardBodyInfo = styled.div`
  display: flex;
`;

export const Info = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
  margin-right: 24px;

  svg {
    margin-right: 8px;
    path {
      stroke: var(--purple);
    }
  }

  span {
    text-align: justify;
  }
`;

export const ButtonParticipate = styled.button`
  background: var(--purpleLight);
  color: #fff;
  width: 100%;
  max-width: 400px;

  align-self: center;
  padding: 12px;
  border-radius: 8px;

  margin-top: 8px;
  cursor: pointer;

  &:hover {
    filter: brightness(85%);
  }
`;
