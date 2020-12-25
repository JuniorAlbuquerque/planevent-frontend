import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: stretch;
`;

export const Background = styled.div`
  flex: 1;
  background: var(--primary);
  color: var(--white);

  display: flex;
  flex-direction: column;

  place-content: center;
  align-items: center;
  text-align: center;

  img {
    margin: 20px;
    width: 100%;

    max-width: 340px;

    & + img {
      max-width: 440px;
    }
  }

  @media(max-width: 1160px) {
    padding: 14px;

    img {
    margin: 20px;
    width: 100%;

    max-width: 240px;

    & + img {
      max-width: 440px;
    }
  }
  }

  @media(max-width: 900px) {
    display: none;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;

  place-content: center;
  width: 100%;
  max-width: 700px;

  align-items: center;

  img {
    margin: 64px;
    display: none;
  }

  h1 {
    font-weight: 700;
  }

  form {
    margin: 80px;
    width: 340px;

    display: flex;
    flex-direction: column;
    text-align: justify;

    a {
      text-decoration: none;
      align-self: flex-end;
      color: var(--purpleLight);

      font-size: 14px;
      margin-top: 14px;
    }
  }

  @media(max-width: 900px) {
    max-width: 100%;

    img {
      display: block;
    }
  }
`;

