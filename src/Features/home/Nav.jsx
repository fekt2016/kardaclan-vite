import styled, { css } from 'styled-components'
import NavList from '../../ui/NavList'
import { devicesMax } from '../../styles/BreakPoint'
import { Link } from 'react-router-dom'

const StyledNav = styled.div`
  flex: 1;



  display: flex;
  justify-content: space-between;
  align-items: center;

  ${(props) => props.type === 'mini' && css``}
  @media ${devicesMax.md}{
    display: none;
  }
`
const StyledLog = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`
const LogLink = styled(Link)`
  border: 1px solid var(--color-black-900);
  padding: 0.5rem 2rem;
`
const SignLink = styled(Link)`
  padding: 0.5rem 2rem;
  background-color: var(--color-black-900);
  color: var(--color-white-900);
`
function Nav() {
  return (
    <>
      <StyledNav>
        <NavList />
      </StyledNav>
      <StyledLog>
        <LogLink>Login</LogLink>
        <SignLink>Sign Up</SignLink>
      </StyledLog>
    </>
  )
}

export default Nav
