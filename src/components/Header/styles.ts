import styled, { css } from 'styled-components'

export const Box = styled.div`
  ${({ theme }) => css`
    div {
      width: 100px;
      height: 100px;
      position: absolute;
      top: 1500px;
      background-color: ${theme.colors.secondary};
      color: ${theme.colors.white};
      display: flex;
      align-items: center;
      justify-content: center;
    }
  `}
`
