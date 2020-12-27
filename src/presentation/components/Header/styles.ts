import styled, { css } from 'styled-components';

import { Props } from '.';

export const Container = styled.div`
 padding: 50px 34px 30px;
  width: 100%;

  ul {
    display: flex;
    justify-content: space-between;
    align-items: center;

    flex: 1;
    margin-top: 24px;

    width: 100%;
    max-width: 800px;
  }

  ul li {
    list-style-type: none;

  }
`;

export const Item = styled.div<Props>`
    color: var(--textGray);

    font-size: 22px;
    font-weight: 600;
    margin-right: 40px;

    cursor: pointer;

    ${props => props.active && css`
      color: var(--primary);
      position: relative;

      transition: .4s ease;

      &::after {
        position: absolute;
        background: var(--purpleLight);
        width: 60%;
        height: 4px;
        content: "";
        bottom: -2px;
        left: -2px;

        transition: .4s ease;
      }
    `}
`
