import styled from 'styled-components'

import { Link } from 'react-router-dom'
import NavList from '../ui/NavList'
import Social from './Social'
import { devicesMax } from '../styles/BreakPoint'
const StyledNav = styled.nav`
  display: flex;
  flex-direction: column;
`
const StyledMainNav = styled.div`
  height: 5rem;
  padding: 0 6rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  @media ${devicesMax.lg} {
    padding: 0 3rem;
  }
  @media ${devicesMax.md} {
    padding: 0 2rem;
  }
  @media ${devicesMax.sm} {
    padding: 1;
    font-size: 1rem;
  }
`

const StyledLog = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-basis: 25%;

  @media ${devicesMax.md} {
    flex-basis: 60%;
  }
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
const Nav = styled.div`
  @media ${devicesMax.md} {
    display: none;
  }
`
function NavBar() {
  return (
    <StyledNav>
      <Social />
      <StyledMainNav>
        <div>Logo</div>
        <Nav>
          <NavList />
        </Nav>

        <StyledLog>
          <LogLink>Login</LogLink>
          <SignLink>Sign Up</SignLink>
        </StyledLog>
      </StyledMainNav>
    </StyledNav>
  )
}

export default NavBar
