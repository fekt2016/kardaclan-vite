import styled from 'styled-components'
import Background from '../../Features/home/Background'
import TextField from '../../Features/home/TextField'

const StyledHeader = styled.header`
  height: 80vh;
  position: relative;
`
function Header() {
  return (
    <StyledHeader>
      <Background />
      <TextField />
    </StyledHeader>
  )
}

export default Header
