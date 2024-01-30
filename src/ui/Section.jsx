import styled, { css } from 'styled-components'

const Section = styled.section`
  margin-bottom: 4rem;
  padding: 2rem;

  ${(props) =>
    props.type === 'kahill' &&
    css`
      background-color: var(--color-black-700);
    `}
  ${(props) =>
    props.type === 'about' &&
    css`
      background-color: var(--color-black-700);
    `}
`

export default Section
