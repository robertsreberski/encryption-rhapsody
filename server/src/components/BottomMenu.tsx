import * as React from 'react'
import styled from 'styled-components'
import Theme from '../theme'
import { Button } from '../styled/inputs'

type Props = {
  items: string[]
  selected: number
  onSelect: (index: number) => void
}

const MenuBody = styled.div`
  position: relative;
  display: flex;

  flex-direction: row;

  padding: ${Theme.space.md};
`

const Item = styled.span`
  margin: ${Theme.space.md};
`

const BottomMenu: React.FC<Props> = ({ items, selected, onSelect }) => {
  return (
    <MenuBody>
      {items.map((item, index) => (
        <Item>
          <Button accent={index === selected} onClick={() => onSelect(index)}>
            {item}
          </Button>
        </Item>
      ))}
    </MenuBody>
  )
}

export default BottomMenu
