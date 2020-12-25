import styled from 'styled-components';

export const Container = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  background: var(--primary);
  color: var(--white);

  border: 0;
  padding: 14px;
  border-radius: 8px;

  margin-top: 16px;
  position: relative;

  &:hover {
    filter: brightness(85%);
    transition: .25s ease;
  }

  svg {
    cursor: pointer;
    stroke: var(--white);

    position: absolute;
    left: 14px;
  }
`;
