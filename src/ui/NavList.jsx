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
    margin-right: 15px;
  }
`
const NavItem = styled.li`
  height: 100%;
  margin-right: 30px;
  text-transform: capitalize;

  display: flex;
  align-items: center;

  @media ${devicesMax.md} {
    font-size: 1.1rem;
  }
`
function NavList() {
  return (
    <StyledNavList>
      <NavItem>
        <Link to="buy">buy</Link>
      </NavItem>
      <NavItem>
        <Link to="rent">rent</Link>
      </NavItem>
      <NavItem>
        <Link to="sell">sell</Link>
      </NavItem>
      <NavItem>
        <Link to="agents">agents</Link>
      </NavItem>
      <NavItem>
        <Link to="about">about Us</Link>
      </NavItem>
      <NavItem>
        <Link to="contact">Contact</Link>
      </NavItem>
    </StyledNavList>
  )
}

export default NavList
