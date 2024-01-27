import styled, { css } from 'styled-components'
import { devicesMax } from '../styles/BreakPoint'

const Heading = styled.h1`
  ${(props) =>
    props.as === 'h1' &&
    css`
      font-size: 7rem;
      text-transform: capitalize;
      text-align: center;

      @media ${devicesMax.md} {
        font-size: 5rem;
      }
      @media ${devicesMax.md} {
        font-size: 3rem;
      }
    `}
`
export default Heading
