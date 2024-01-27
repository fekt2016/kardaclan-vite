import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { devicesMax } from '../styles/BreakPoint'

const StyledNavList = styled.ul`
  height: 100%;
  flex: 1;

  margin-right: 20px;
  display: flex;
  justify-content: end;
  align-items: center;

  @media ${devicesMax.md} {
    display: none;
  }
`
const NavItem = styled.li`
  height: 100%;
  margin-right: 30px;
  text-transform: capitalize;

  display: flex;
  align-items: center;
`
function NavList() {
  return (
    <StyledNavList>
      <NavItem>
        <Link>buy</Link>
      </NavItem>
      <NavItem>
        <Link>rent</Link>
      </NavItem>
      <NavItem>
        <Link>sell</Link>
      </NavItem>
      <NavItem>
        <Link>agents</Link>
      </NavItem>
      <NavItem>
        <Link>about Us</Link>
      </NavItem>
      <NavItem>
        <Link>Contact</Link>
      </NavItem>
    </StyledNavList>
  )
}

export default NavList
