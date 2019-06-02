import styled from 'styled-components'
import Theme from '../../theme'

export const BarBody = styled.div`
  display: flex;
  position: relative;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  margin-bottom: ${Theme.space.lg};
  padding: ${Theme.space.md} ${Theme.space.xxl};
  border-radius: 6px;
  background-color: ${Theme.color.background.white};
  box-shadow: ${Theme.color.shadow.normal};
`

export const SourceInput = styled.div`
  font-size: 16px;
  font-weight: 400;

  position: relative;
  border-radius: 6px;
  padding: ${Theme.space.md};

  width: 100%;

  background-color: ${Theme.color.background.grey};
  overflow-x: hidden;
  cursor: pointer;

  span {
    display: none;
    align-items: center;
    position: absolute;

    font-size: 12px;
    font-weight: 400;

    top: ${Theme.space.sm};
    bottom: ${Theme.space.sm};
    right: ${Theme.space.sm};

    padding: 0 ${Theme.space.md};
    background-color: ${Theme.color.background.white};
    border-radius: 6px;
  }

  :hover {
    span {
      display: flex;
    }
  }
`

export const SimpleInput = styled.input`
  font-size: 16px;
  font-weight: 500;

  border: none;
  border-radius: 6px;
  padding: ${Theme.space.md};

  background-color: ${Theme.color.background.grey};
  width: 100%;
`
