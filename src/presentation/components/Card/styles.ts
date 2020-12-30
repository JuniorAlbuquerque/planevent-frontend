import styled from 'styled-components';

export const Container = styled.div`
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
    margin-bottom: 14px;
  }
`;

export const Info = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 8px;

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
