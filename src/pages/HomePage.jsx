import styled from 'styled-components'
import House from '../Features/home/House'
import Area from '../Features/home/Area'
import KaHill from '../Features/home/KaHill'
import AboutUs from '../Features/home/AboutUs'
import Services from '../Features/home/Services'

const Main = styled.main`
  padding: 1rem;
`

function HomePage() {
  return (
    <Main>
      <House />
      <KaHill />
      <Area />
      <AboutUs />
      <Services />
    </Main>
  )
}

export default HomePage
