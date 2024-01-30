import styled from 'styled-components'
import Section from '../../ui/Section'
import Heading from '../../ui/Heading'

const Container = styled.div`
  display: flex;
`

function Area() {
  return (
    <Section>
      <Container>
        <div>
          <Heading as="h2">Choice Neighbourhoods for a Home in Accra</Heading>
          <p>
            These neighbourhoods are highly desirable for business, living and
            pleasure. Find out why!
          </p>
        </div>
        <div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </Container>
    </Section>
  )
}

export default Area
