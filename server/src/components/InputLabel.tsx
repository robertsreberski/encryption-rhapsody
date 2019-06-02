import * as React from 'react'
import styled from 'styled-components'
import Theme from '../theme'
import { CSSProperties } from 'react'

type Props = {
  label: string
  children: React.ReactElement
  style?: CSSProperties
}

const LabelBody = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 0 ${Theme.space.lg};
`

const Label = styled.span`
  font-size: 16px;
  font-weight: bold;
  color: ${Theme.color.text.black};
  text-transform: uppercase;
  margin-right: ${Theme.space.lg};
`

const InputLabel: React.FC<Props> = ({ style, label, children }) => {
  return (
    <LabelBody style={style}>
      <Label>{label}</Label>
      {children}
    </LabelBody>
  )
}

export default InputLabel
