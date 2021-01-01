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
  margin-left: 290px;
`;

export const Header = styled.div`
  padding: 50px 34px 30px;
  width: 100%;

  display: flex;
  align-items: center;

  h3 {
    margin-left: 24px;
  }
`;

export const Content = styled.div`
  flex: 1;
  width: 100%;

  padding: 4px 14px 0px 32px;

  form label {
    font-weight: 600;
  }
`;

export const Row = styled.div`
  display: flex;
`;

export const ContentRow = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  margin-right: 14px;
`;

export const Buttons = styled.div`
  display: flex;
  align-items: center;
  justify-content:center;

  button, a {
    margin: 14px;
    background: var(--purpleLight);

    padding: 14px 34px;

    &:hover {
      filter: brightness(85%);
      transition: .35s ease-out;
    }
  }

  a {
    text-decoration: none;
    color: var(--white);

    border-radius: 8px;
    background: #FBB540;
  }
`;


