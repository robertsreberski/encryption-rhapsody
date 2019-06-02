import * as React from 'react'
import { Cell, Row, TableBody } from './styles'

type Props = {
  selected?: number
  onSelect?: (index: number) => void

  headers: string[]
  centered?: boolean[]
  data: (string | number | React.ReactElement)[][]
}

const Table: React.FC<Props> = ({ selected, onSelect, centered, headers, data }) => {
  return (
    <>
      <TableBody>
        <tr>
          {headers.map(header => (
            <th>{header}</th>
          ))}
        </tr>
        {data.map((row, index) => (
          <Row selected={index === selected} onClick={onSelect ? () => onSelect(index) : undefined}>
            {row.map((cell, colNumber) => (
              <Cell centered={centered && centered[colNumber]}>{cell}</Cell>
            ))}
          </Row>
        ))}
      </TableBody>
    </>
  )
}

export default Table
