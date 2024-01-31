import styled from 'styled-components'
import NavList from './NavList'
import Icon from './Icon'

const StyledFooter = styled.footer`
  height: 40rem;
  background-color: var(--color-black-500);
`
const TopFooter = styled.div`
  padding: 4rem;
  margin-bottom: 4rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const BottomFooter = styled.div`
  /* width: 70%; */
  margin: 0 auto;
  /* padding: 4rem; */

  display: flex;
  flex-direction: column;
  justify-self: center;
  align-items: center;
`
function Footer() {
  return (
    <StyledFooter>
      <TopFooter>
        <span>Logo</span>
        <NavList />
      </TopFooter>
      <BottomFooter>
        <Icon />
        <p>copyright reserve</p>
      </BottomFooter>
    </StyledFooter>
  )
}

export default Footer
