/* eslint react/prop-types: 0 */
import styled, { css } from 'styled-components'
import { Link } from 'react-router-dom'
import { devicesMax } from '../styles/BreakPoint'

const StyledNavList = styled.ul`
  height: 100%;
  padding: 0 1rem;
  margin-top: 1rem;

  display: flex;
  align-items: center;
  justify-content: center;

  color: ${(props) => (props.type === 'mini' ? 'white' : 'black')};

  ${(props) =>
    props.type === 'mini' &&
    css`
      flex-direction: column;
      background-color: var(--color-black-900);
    `}
`
const NavItem = styled.li`
  padding: 0.5rem 1rem;
  margin-right: 30px;
  text-transform: capitalize;

  @media ${devicesMax.md} {
    font-size: 1.1rem;
  }
`
function NavList({ type }) {
  return (
    <StyledNavList type={type}>
      <NavItem>
        <Link to="buyhomes">buy</Link>
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
