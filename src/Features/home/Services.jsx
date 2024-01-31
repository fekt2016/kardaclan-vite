import styled from 'styled-components'
import Section from '../../ui/Section'
import Heading from '../../ui/Heading'
import { devicesMax } from '../../styles/BreakPoint'

const Container = styled.div`
  display: flex;
`
const LeftBox = styled.div`
  flex: 1;
  @media ${devicesMax.md} {
    display: none;
  }
`
const RightBox = styled.div`
  flex: 1;

  display: flex;
  flex-direction: column;
  justify-content: center;
  /* align-items: center; */
`
const HeadingBox = styled.div`
  text-align: center;
  color: var(--color-black-500);
`
const ListBox = styled.div`
  padding: 4rem;

  width: 70%;
  height: 100%;
  margin: 2rem auto;
  @media ${devicesMax.md} {
    width: 100%;
  }
`
const List = styled.ul`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  font-size: 3rem;
  font-family: 'Pacifico';
  list-style-type: square;
  color: var(--color-black-500);
`
function Services() {
  return (
    <Section>
      <Container>
        <LeftBox>
          <img src="../../../House6.jpg" />
        </LeftBox>
        <RightBox>
          <HeadingBox>
            <Heading as="h2">KardanClan Construction</Heading>
            <p>Our service</p>
          </HeadingBox>
          <ListBox>
            <List>
              <li>real estates</li>
              <li>Architectural engineering</li>
              <li>survey engineering</li>
              <li>structure development</li>
              <li>building consultation</li>
              <li>electrical engineering </li>
            </List>
          </ListBox>
        </RightBox>
      </Container>
    </Section>
  )
}

export default Services
