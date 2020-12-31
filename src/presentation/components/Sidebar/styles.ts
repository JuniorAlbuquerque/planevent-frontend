import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr auto;
  height: 100vh;

  grid-template-areas:
    "logo"
    "buttons"
    "profile";

  justify-content: center;
  padding: 40px 20px;

  width: 100%;
  max-width: 290px;

  border-right: 2px solid var(--gray);

  img {
    width: 180px;
    grid-area: logo;

    justify-self: center;
    margin-bottom: 28px;
  }
`;

export const Buttons = styled.div`
  display: flex;
  flex-direction: column;

  grid-area: buttons;
`;

export const Button = styled.div`
  background: var(--buttonColor);
  padding: 24px;

  margin: 10px;
  border-radius: 28px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  span {
    display: inline-block;
    width: 50px;

    font-size: 18px;
    font-weight: 600;
  }
`;

export const Icon = styled.div`
  background: var(--purpleLight);
  width: 50px;
  height: 50px;

  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  color: var(--white);
  cursor: pointer;

  &:hover {
    filter: brightness(85%);
    transition: .25s ease;
  }
`;


export const Profile = styled.div`
  grid-area: profile;
  display: flex;
  flex-direction: column;

  align-items: center;

  div {
    display: flex;
  }

  img {
    width: 80px;
    margin-bottom: 10px;
  }

  p {
    margin-bottom: 4px;
  }

  a {
    font-size: 14px;
    text-decoration: none;
    margin-right: 8px;

    color: var(--purpleLight);
  }

  button {
    background: none;
    font-size: 14px;

    color: var(--cancel);
  }
`;
