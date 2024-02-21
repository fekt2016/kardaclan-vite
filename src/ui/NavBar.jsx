import styled from 'styled-components'

import Social from './Social'
import { devicesMax } from '../styles/BreakPoint'
import Nav from '../Features/home/Nav'
import { HiMiniXMark, HiOutlineBars3BottomRight } from 'react-icons/hi2'
import { useState } from 'react'
import NavList from './NavList'

const StyledNav = styled.nav`
  display: flex;
  flex-direction: column;

  position: sticky;
  top: 0;
  left: 0;
  z-index: 9999;
`
const StyledMainNav = styled.div`
  padding: 1rem 6rem;

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
const IconCross = styled(HiOutlineBars3BottomRight)`
  font-size: 3rem;
  color: var(--color-primary-900);
  display: none;
  @media ${devicesMax.md} {
    display: block;
  }
`
const IconMenu = styled(HiMiniXMark)`
  font-size: 3rem;
  color: var(--color-primary-900);
  display: none;
  z-index: 10000;
  @media ${devicesMax.md} {
    display: block;
  }
`
const StyledMinNav = styled.nav`
  position: absolute;
  top: 7rem;
  left: 0;
  width: 100vw;
  opacity: ${(props) => (props.show ? 1 : 0)};
  visibility: ${(props) => (props.show ? 'visible' : 'hidden')};
  height: 30rem;
  transition: all 0.5s;
  z-index: 10;
`

const Img = styled.img`
  height: 5rem;
`
const LogoBox = styled.div`
  display: flex;
  align-items: center;
`
function NavBar() {
  const [show, setShow] = useState(false)

  return (
    <StyledNav>
      <Social />
      <StyledMainNav>
        <LogoBox>
          <Img src="../../edo.png" alt="logo" />
        </LogoBox>
        <Nav />
        {!show ? (
          <IconCross onClick={() => setShow(true)} />
        ) : (
          <IconMenu onClick={() => setShow(false)} />
        )}
        {show && (
          <StyledMinNav show={show}>
            <NavList type="mini" />
          </StyledMinNav>
        )}
      </StyledMainNav>
    </StyledNav>
  )
}

export default NavBar
