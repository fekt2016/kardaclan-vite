import styled from 'styled-components'
import Section from '../../ui/Section'
import Heading from '../../ui/Heading'
import { devicesMax } from '../../styles/BreakPoint'

const Container = styled.div`
  height: 120rem;
  display: flex;
  padding: 4rem;
  gap: 20px;

  @media ${devicesMax.md} {
    flex-direction: column;
  }
`
const LeftBox = styled.div`
  flex-basis: 50%;

  @media ${devicesMax.md} {
    display: flex;
    flex-direction: column;
  }
`
const RightBox = styled.div`
  flex-basis: 50%;

  &:not(:last-child) {
    margin-bottom: 2rem;
  }
`

const ImgBox = styled.div`
  height: ${(props) => props.height};
  background-image: ${(props) => `url(${props.background})`};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;

  &:not(:last-child) {
    margin-bottom: 2rem;
  }
`
const AboutCard = styled.div`
  padding: 1rem;
  width: 60%;
  /* height: 50%; */
  background-color: var(--color-white-900);
  position: absolute;
  right: 1rem;
  bottom: 1rem;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: start;
`
const HeadingBox = styled.div`
  /* height: 20%; */
  margin-bottom: 4rem;
  color: var(--color-white-900);
  padding: 2rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Button = styled.button`
  background-color: var(--color-white-900);
  padding: 0.5rem 2rem;
`

const P = styled.p`
  @media ${devicesMax.md} {
    font-size: 1.3rem;
  }
`
function AboutUs() {
  return (
    <Section type="about">
      <Container>
        <LeftBox>
          <HeadingBox>
            <Heading as="h2">Kardaclan Construction & real estate</Heading>
            <p>
              Since 2020, Kardaclan Real Estate has set the standard in the real
              estate business. So, when it comes to your home, never settle.
              Move with the relentless agents of the Brand on your side.
            </p>
          </HeadingBox>
          <ImgBox height="35%" background="../../../house908876.jpg">
            <AboutCard>
              <Heading as="h4">Luxury</Heading>
              <p>Explore featured luxury homes & Estates.</p>
              <Button>Visit Ka hills</Button>
            </AboutCard>
          </ImgBox>
          <ImgBox height="35%" background="../../../house090988.jpg">
            <AboutCard>
              <Heading as="h4">Commercial</Heading>
              <P>
                A Global brand with local representation specializing in
                Commercial Real Estate spaces.
              </P>
              <Button>Visit Ka commercial </Button>
            </AboutCard>
          </ImgBox>
        </LeftBox>
        <RightBox>
          <ImgBox height="50%" background="../../../House6.jpg">
            <AboutCard>
              <Heading as="h4">GLOBAL</Heading>
              <P>
                Search International Real Estate Listings in over 18 languages
                with more than 36 currencies.
              </P>
              <Button>Visit Ka Global</Button>
            </AboutCard>
          </ImgBox>

          <ImgBox height="50%" background="../../../house77.jpeg">
            <AboutCard>
              <Heading as="h4">accra</Heading>
              <P>
                Buscar CENTURY 21 Español para encontrar propiedades de bienes
                raíces, casas en venta y agentes de bienes raíces.
              </P>
              <Button>Visit Ka accra </Button>
            </AboutCard>
          </ImgBox>
        </RightBox>
      </Container>
    </Section>
  )
}

export default AboutUs
