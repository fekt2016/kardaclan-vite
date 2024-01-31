import styled from 'styled-components'
import Section from '../../ui/Section'
import Heading from '../../ui/Heading'
import { devicesMax } from '../../styles/BreakPoint'

const Container = styled.div`
  display: flex;
  padding: 4rem;
  gap: 30px;

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
  display: flex;
  flex-direction: column;
  gap: 20px;

  &:not(:last-child) {
    margin-bottom: 2rem;
  }
`

const ImgBox = styled.div`
  position: relative;

  &:not(:last-child) {
    margin-bottom: 2rem;
  }
`
const RightImgBox = styled.div`
  height: 50%;
  position: relative;
`
const AboutCard = styled.div`
  padding: 1rem;
  width: 60%;
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
const Img = styled.img`
  height: 100%;
  width: 100%;
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
          <ImgBox>
            <Img src="../../../house0900.jpeg" alt="" />
            <AboutCard>
              <Heading as="h4">Luxury</Heading>
              <p>Explore featured luxury homes & Estates.</p>
              <Button>Visit Ka hills</Button>
            </AboutCard>
          </ImgBox>
          <ImgBox>
            <Img src="../../../house44.jpeg" alt="" />
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
          <RightImgBox>
            <Img src="../../../House1.jpg" alt="" />
            <AboutCard>
              <Heading as="h4">GLOBAL</Heading>
              <P>
                Search International Real Estate Listings in over 18 languages
                with more than 36 currencies.
              </P>
              <Button>Visit Ka Global</Button>
            </AboutCard>
          </RightImgBox>

          <RightImgBox>
            <Img src="../../../house090988.jpg" alt="" />
            <AboutCard>
              <Heading as="h4">Accra</Heading>
              <P>
                Buscar CENTURY 21 Español para encontrar propiedades de bienes
                raíces, casas en venta y agentes de bienes raíces.
              </P>
              <Button>Visit Ka accra </Button>
            </AboutCard>
          </RightImgBox>
        </RightBox>
      </Container>
    </Section>
  )
}

export default AboutUs
