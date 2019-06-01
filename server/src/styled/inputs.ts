import styled, { css } from 'styled-components'
import Theme from '../theme'

export const Button = styled.button<{ accent?: boolean; disabled?: boolean }>`
  position: relative;

  padding: ${Theme.space.md} ${Theme.space.xxl};

  font-size: 14px;
  font-weight: 500;
  color: ${Theme.color.text.black};
  box-shadow: ${Theme.color.shadow.light};
  border-radius: 4px;

  cursor: pointer;
  outline: none;

  ${({ accent }) =>
    accent &&
    css`
      background-color: ${Theme.color.accent};
      color: ${Theme.color.text.white};
    `};

  ${({ disabled }) =>
    disabled &&
    css`
      opacity: 0.5;
      cursor: default;
      pointer-events: none;
    `};
`
