import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  width: 100%;

  display: flex;
  align-items: stretch;

  @media(max-width: 884px) {
    flex-direction: column;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  margin-left: 290px;

  @media(max-width: 884px) {
    margin-left: 0px;
  }
`;

export const Header = styled.div`
  padding: 40px 34px 30px;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  h3 {
    margin-left: 24px;
  }

  div {
    display: flex;
    align-items: center;
  }

  button {
    margin-top: 0px;
    background: var(--cancel);

    svg {
      stroke: var(--white);

      position: relative;
      margin-right: 8px;
    }
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

  @media(max-width: 986px) {
    flex-direction: column;
  }
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

