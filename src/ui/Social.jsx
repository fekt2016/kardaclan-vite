import { Link } from 'react-router-dom'
import styled, { css } from 'styled-components'
import {
  FaFacebook,
  FaTwitter,
  FaTiktok,
  FaYoutube,
  FaPhone,
} from 'react-icons/fa'
import { IoMailUnread } from 'react-icons/io5'
import { devicesMax } from '../styles/BreakPoint'

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

const StyledSocial = styled.div`
  height: 4rem;
  padding: 0 6rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--color-black-900);
  @media ${devicesMax.md} {
    padding: 0 2rem;
  }
  @media ${devicesMax.md} {
    padding: 0;
  }
`

const StyledIconBox = styled.div`
  flex-basis: 15%;
  height: 100%;

  display: flex;
  justify-content: space-around;
  align-items: center;

  @media ${devicesMax.md} {
    flex-basis: 30%;
  }
`
const StyledCont = styled.div`
  color: var(--color-white-900);

  height: 100%;
  flex-basis: 50%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media ${devicesMax.md} {
    flex-basis: 50%;
    font-size: 1.4rem;
  }
  @media ${devicesMax.sm} {
    flex-basis: 70%;
    font-size: 1rem;
  }
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
function Social() {
  return (
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
  )
}

export default Social
