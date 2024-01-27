import styled, { css } from 'styled-components'
import {
  FaFacebook,
  FaTwitter,
  FaTiktok,
  FaYoutube,
  FaPhone,
} from 'react-icons/fa'
import { IoMailUnread } from 'react-icons/io5'
import { Link } from 'react-router-dom'
import NavList from '../ui/NavList'

const StyledIcon = css`
  font-size: 1.6rem;
  color: var(--color-white-900);
  transition: all 0.4s;

  &:hover {
    color: ${(props) => `var(${props.iconcolor})`};
    transform: scale(1.5);
  }
`

const FacebookIcon = styled(FaFacebook)`
  ${StyledIcon}
`
const TwitterIcon = styled(FaTwitter)`
  ${StyledIcon}
`
const YoutubeIcon = styled(FaYoutube)`
  ${StyledIcon}
`
const TiktokIcon = styled(FaTiktok)`
  ${StyledIcon}
`

const StyledNav = styled.nav`
  display: flex;
  flex-direction: column;
`
const StyledSocial = styled.div`
  height: 4rem;
  padding: 0 6rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--color-black-900);
`
const StyledMainNav = styled.div`
  height: 5rem;
  padding: 0 6rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
`
const StyledIconBox = styled.div`
  flex-basis: 15%;
  height: 100%;

  display: flex;
  justify-content: space-around;
  align-items: center;
`
const StyledCont = styled.div`
  color: var(--color-white-900);
  height: 100%;
  flex-basis: 35%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const IntouchLink = styled(Link)`
  flex: 1;
  display: flex;
  align-items: center;
  margin-left: 2rem;
  transition: all 0.4s;

  &:hover {
    color: var(--color-facebook-900);
    transform: scale(1.5);
  }
`
const PhoneIcon = styled(FaPhone)`
  margin-right: 0.8rem;
`
const MailIcon = styled(IoMailUnread)`
  margin-right: 0.8rem;
`
const IconLink = styled(Link)``

const StyledLog = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-basis: 20%;
`
const LogLink = styled(Link)`
  border: 1px solid var(--color-black-900);
  padding: 0.5rem 2rem;
`
function NavBar() {
  return (
    <StyledNav>
      <StyledSocial>
        <StyledIconBox>
          <IconLink>
            <FacebookIcon iconcolor="--color-facebook-900" />
          </IconLink>
          <Link>
            <TwitterIcon iconcolor="--color-twitter-900" />
          </Link>
          <Link>
            <TiktokIcon iconcolor="--color-tiktok-900" />
          </Link>
          <Link>
            <YoutubeIcon iconcolor="--color-youtube-900" />
          </Link>
        </StyledIconBox>
        <StyledCont>
          <IntouchLink>
            <MailIcon />
            <span>GET IN TOUCH</span>
          </IntouchLink>
          <IntouchLink>
            <PhoneIcon />
            <span>+233 244388190</span>
          </IntouchLink>
        </StyledCont>
      </StyledSocial>
      <StyledMainNav>
        <div>Logo</div>
        <NavList />
        <StyledLog>
          <LogLink>Login</LogLink>
          <LogLink>Sign Up</LogLink>
        </StyledLog>
      </StyledMainNav>
    </StyledNav>
  )
}

export default NavBar
