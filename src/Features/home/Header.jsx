import styled from 'styled-components'
import Background from '../../Features/home/Background'
import TextField from '../../Features/home/TextField'
import { useState } from 'react'

const StyledHeader = styled.header`
  height: 80vh;
  position: relative;
  margin-bottom: 4rem;
`
function Header() {
  const [count, setCount] = useState(0)

  return (
    <StyledHeader>
      <Background count={count} setCount={setCount} />
      <TextField count={count} setCount={setCount} />
    </StyledHeader>
  )
}

export default Header
