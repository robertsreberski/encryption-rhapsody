import styled from 'styled-components'
import Theme from '../../theme'
import { rgba } from 'polished'

export const TableBody = styled.table`
  width: 100%;
  border-spacing: ${Theme.space.md};
  border-collapse: separate;
`

export const Cell = styled.td<{ centered?: boolean }>`
  text-align: ${({ centered }) => (centered ? 'center' : 'left')};
`

export const Row = styled.tr`
  ${Cell} {
    font-size: 14px;
    padding: ${Theme.space.md};
    background-color: ${rgba(Theme.color.background.black, 0.06)};
    border-radius: 6px;
    border-spacing: ${Theme.space.md};
  }

  :hover {
    background-color: ${rgba(Theme.color.background.black, 0.1)};
  }
`
