import styled from 'styled-components'
import Section from '../../ui/Section'
import Heading from '../../ui/Heading'
import { devicesMax } from '../../styles/BreakPoint'

const Container = styled.div`
  padding: 4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`
const AreaBox = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 10px;
  width: 100%;

  @media ${devicesMax.md} {
    font-size: 1.3rem;
  }
  @media ${devicesMax.md} {
    width: 30em;
    overflow-x: auto;
    white-space: nowrap;
  }
`
const HeadingBox = styled.div`
  margin-bottom: 4rem;

  text-align: center;
`
const AreaCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  flex: 1;

  img {
    border-radius: 10px;
    height: 123px;
  }
  span {
    text-transform: capitalize;
    padding: 1rem;
  }
`

function Area() {
  return (
    <Section>
      <Container>
        <HeadingBox>
          <Heading as="h4">Neighbourhoods every Ghanaian wants to live</Heading>
        </HeadingBox>
        <AreaBox>
          <AreaCard>
            <img src="../../../public/airport.webp" alt="area1" />
            <span>Airport resident</span>
          </AreaCard>
          <AreaCard>
            <img src="../../../public/Dzorwulu.webp" alt="area1" />
            <span>dzorwulu</span>
          </AreaCard>
          <AreaCard>
            <img src="../../../public/cont.jpeg" alt="area1" />
            <span>cantonment</span>
          </AreaCard>
          <AreaCard>
            <img src="../../../public/eastlegon.webp" alt="area1" />
            <span>easy legon</span>
          </AreaCard>
          <AreaCard>
            <img src="../../../public/Lashibi3.jpeg" alt="area1" />
            <span>lashibi</span>
          </AreaCard>
        </AreaBox>
      </Container>
    </Section>
  )
}

export default Area
