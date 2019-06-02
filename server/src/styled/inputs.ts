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

export const AbsoluteFab = styled.button`
  position: absolute;
  left: 0;
  right: 0;
  bottom: ${Theme.space.md};
  width: 20%;
  margin: 0 auto;

  padding: ${Theme.space.lg} ${Theme.space.xxl};

  font-size: 16px;
  font-weight: 500;
  color: ${Theme.color.text.black};
  box-shadow: ${Theme.color.shadow.light};
  border-radius: 24px;

  cursor: pointer;
  outline: none;
`
