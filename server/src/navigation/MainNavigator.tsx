import * as React from 'react'
import { useState } from 'react'
import styled from 'styled-components'
import BottomMenu from '../components/BottomMenu'
import Theme from '../theme'

type Props = {
  entries: {
    name: string
    component: React.ComponentClass | React.FC
  }[]
}

const Body = styled.div`
  display: flex;
  width: 100%;
  height: 100%;

  flex-direction: column;
`

const Scene = styled.div`
  flex: 1;
  padding: ${Theme.space.md};

  background-color: ${Theme.color.background.grey};
  box-shadow: ${Theme.color.shadow.bottom};
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
`

const Footer = styled.div`
  margin-top: auto;
`

const MainNavigator: React.FC<Props> = ({ entries }) => {
  const [selected, setSelected] = useState(0)
  const NestedComponent = React.createElement(entries[selected].component)

  return (
    <Body>
      <Scene>{NestedComponent}</Scene>
      <Footer>
        <BottomMenu
          items={entries.map(entry => entry.name)}
          selected={selected}
          onSelect={setSelected}
        />
      </Footer>
    </Body>
  )
}

export default MainNavigator
