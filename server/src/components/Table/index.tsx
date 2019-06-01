import * as React from 'react'
import { Cell, Row, TableBody } from './styles'

type Props = {
  headers: string[]
  centered?: boolean[]
  data: (string | number | React.ReactElement)[][]
}

const Table: React.FC<Props> = ({ centered, headers, data }) => {
  return (
    <>
      <TableBody>
        <tr>
          {headers.map(header => (
            <th>{header}</th>
          ))}
        </tr>
        {data.map(row => (
          <Row>
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
