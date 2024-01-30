import styled from 'styled-components'
import Section from '../../ui/Section'

import { FaMountainSun } from 'react-icons/fa6'
import Heading from '../../ui/Heading'
import { devicesMax } from '../../styles/BreakPoint'

const Container = styled.div`
  padding: 4rem;
  height: 600px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  color: var(--color-white-900);
`
const ImgBox = styled.div`
  flex-basis: 50%;
  height: 100%;

  @media ${devicesMax.md} {
    display: none;
  }
`

const TextBox = styled.div`
  flex-basis: 50%;
  padding: 1rem;
  height: 100%;
  text-align: center;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  @media ${devicesMax.md} {
    flex-basis: 100%;
  }
`
const Img = styled.img`
  height: 50%;
  width: 100%;
`
const IconMou = styled(FaMountainSun)`
  font-size: 14rem;
  color: var(--color-youtube-500);
`
const Esp = styled.p`
  font-family: 'Pacifico', cursive;
  text-transform: capitalize;
  color: var(--color-youtube-500);
`
const HeadingBox = styled.div`
  margin-bottom: 2rem;
  font-size: 3rem;
`
const P = styled.p`
  font-size: 2rem;
  font-family: 'Lato', Arial, Helvetica, sans-serif;
  font-weight: 700;
`
const Button = styled.button`
  border: none;
  background-color: var(--color-youtube-500);
  padding: 1rem 2rem;
`
const Pbox = styled.div`
  margin-bottom: 3rem;
`
function KaHill() {
  return (
    <Section type="kahill">
      <Container>
        <ImgBox>
          <Img src="../../../house77.jpeg" />
          <Img src="../../../house56.jpeg" />
        </ImgBox>
        <TextBox>
          <IconMou />
          <HeadingBox>
            <Heading as="h3">Ka Hills</Heading>
            <Esp>estates</Esp>
          </HeadingBox>
          <Pbox>
            <P>3 bedroom Box House</P>
            <P>
              Paved path, swimming pool, smart light system, water reservoir...
            </P>

            <P>Starting from GHS2,400,000</P>
          </Pbox>
          <Button>Learn More</Button>
        </TextBox>
      </Container>
    </Section>
  )
}

export default KaHill
