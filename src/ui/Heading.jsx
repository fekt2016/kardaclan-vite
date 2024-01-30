import styled, { css } from 'styled-components'
import { devicesMax } from '../styles/BreakPoint'

const Heading = styled.h1`
  ${(props) =>
    props.as === 'h1' &&
    css`
      font-size: 5rem;
      text-transform: capitalize;
      text-align: center;
      font-weight: 300;
      font-family: 'Open Sans', Arial, Helvetica, sans-serif;
      @media ${devicesMax.md} {
        font-size: 5rem;
      }
      @media ${devicesMax.sm} {
        font-size: 3rem;
      }
    `}
  ${(props) =>
    props.as === 'h2' &&
    css`
      font-size: 4rem;

      @media ${devicesMax.md} {
        font-size: 2rem;
      }
      @media ${devicesMax.sm} {
        font-size: 1.5rem;
      }
    `}
    ${(props) =>
      props.as === 'h3' &&
      css`
        font-size: 7rem;

        @media ${devicesMax.md} {
          font-size: 2rem;
        }
        @media ${devicesMax.sm} {
          font-size: 1.5rem;
        }
      `}
`
export default Heading
