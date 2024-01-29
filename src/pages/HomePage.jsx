import styled from 'styled-components'

import House from '../Features/home/House'

const Main = styled.main`
  padding: 1rem;
`

function HomePage() {
  return (
    <Main>
      <House />
    </Main>
  )
}

export default HomePage
