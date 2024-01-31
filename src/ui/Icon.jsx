import styled, { css } from 'styled-components'
import { devicesMax } from '../styles/BreakPoint'
import { Link } from 'react-router-dom'
import { FaFacebook, FaTwitter, FaTiktok, FaYoutube } from 'react-icons/fa'

const StyledIcon = css`
  font-size: 1.6rem;
  color: var(--color-white-900);
  transition: all 0.4s;
  margin: 4rem;

  &:hover {
    color: ${(props) => `var(${props.iconcolor})`};
    transform: scale(1.5);
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

const IconLink = styled(Link)``

function Icon() {
  return (
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
  )
}

export default Icon
