import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  width: 100%;

  display: flex;
  align-items: stretch;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

   width: 100%;
`;

export const Header = styled.div`
  padding: 38px 34px 30px;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  text-align: left;
`;

export const Content = styled.div`
  flex: 1;
  width: 100%;

  padding: 4px 14px 0px 32px;
`;

export const Input = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;

  width: 100%;
  max-width: 580px;
  position: relative;

  form {
    width: 90%;
  }

  input {
    width: 100%;
    background: var(--inputColor);
    border: 0;
    height: 100%;


    padding: 14px;
    border-radius: 8px;

    margin-right: 8px;
  }

  input[type="date"] {
    padding: 13px;
  }
`;

export const Filter = styled.div`
  /* position: absolute;
  right: 80px; */
  margin-left: 8px;

  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;

  background: var(--primary);
  color: #fff;
  height: 100%;
  width: 80px;

  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px;
  cursor: pointer;

  &:hover {
    filter: brightness(85%);
  }
`;

export const ButtonSearch = styled.button`
  /* position: absolute;
  right: 0; */
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;

  background: var(--purpleLight);
  color: #fff;
  height: 100%;

  padding: 12px;
  width: 80px;

  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:hover {
    filter: brightness(85%);
  }
`;

export const Card = styled.div`
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
