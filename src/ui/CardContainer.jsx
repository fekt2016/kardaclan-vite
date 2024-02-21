import styled from 'styled-components'
import { devicesMax } from '../styles/BreakPoint'

const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;

  @media ${devicesMax.lg} {
    grid-template-columns: repeat(3, 1fr);
  }
  @media ${devicesMax.md} {
    grid-template-columns: repeat(2, 1fr);
  }
  @media ${devicesMax.sm} {
    grid-template-columns: 1fr;
  }
`

export default CardContainer
