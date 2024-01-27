import { useEffect, useState } from 'react'
import styled, { keyframes } from 'styled-components'

const fadeIn = keyframes`
from {opacity: 0}
to {opacity: 1}
`
const StyledBackground = styled.div`
  height: 80vh;
  width: 100vw;
  position: absolute;
  top: 0;
  z-index: -1;
  animation: ${fadeIn} 500ms ease-in-out;
`
const Img = styled.img`
  width: 100%;
  height: 100%;
  filter: brightness(50%);
`
function Background() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    setInterval(() => {
      setCount((count) => {
        return count === 2 ? 0 : count + 1
      })
    }, 6000)
  }, [])

  if (count === 0) {
    return (
      <StyledBackground>
        <Img src="../../../House1.jpg" alt="house1" />
      </StyledBackground>
    )
  } else if (count === 1) {
    return (
      <StyledBackground>
        <Img src="../../../house2.jpg" alt="house2" />
      </StyledBackground>
    )
  } else if (count === 2) {
    return (
      <StyledBackground>
        <Img src="../../../house3.jpg" alt="house3" />
      </StyledBackground>
    )
  } else if (count === 3) {
    return (
      <StyledBackground>
        <Img src="../../../House4.jpg" alt="house3" />
      </StyledBackground>
    )
  }
}
export default Background
