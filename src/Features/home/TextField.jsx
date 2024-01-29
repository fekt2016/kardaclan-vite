/* eslint react/prop-types: 0 */
import styled from 'styled-components'
import Heading from '../../ui/Heading'
import { devicesMax } from '../../styles/BreakPoint'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'

const StyledContent = styled.div`
  width: 100%;
  height: 100%;
  color: var(--color-white-900);

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`
const InputBox = styled.div`
  width: 50rem;
  position: relative;

  @media ${devicesMax.md} {
    width: 40rem;
  }
  @media ${devicesMax.md} {
    width: 30rem;
  }
`
const Input = styled.input`
  padding: 1.5rem 3rem;
  width: 100%;
  text-transform: capitalize;
  border-radius: 10px;
  border: none;
  color: var(--color-black-900);
`
const Button = styled.button`
  background-color: var(--color-black-900);
  width: 4rem;
  height: 4rem;
  border-radius: 100px;
  border: none;
  position: absolute;
  right: 1rem;
  top: 0.8rem;
`
const ArrowBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 4rem;
`
const BackIcon = styled(IoIosArrowBack)`
  font-size: 5rem;
  cursor: pointer;
`
const ForwardIcon = styled(IoIosArrowForward)`
  font-size: 5rem;
  cursor: pointer;
`

function TextField({ count, setCount }) {
  return (
    <StyledContent>
      <div>
        <Heading as="h1">Your Next home is here</Heading>
      </div>
      <ArrowBox>
        <BackIcon
          onClick={() => {
            const firstCount = count === 0
            const newCount = firstCount ? 3 - 1 : count - 1
            setCount(newCount)
          }}
        />
        <ForwardIcon
          onClick={() => {
            const lastCount = count === 3 - 1
            const newCount = lastCount ? 0 : count + 1
            setCount(newCount)
          }}
        />
      </ArrowBox>
      <InputBox>
        <Input type="search" placeholder="enter location"></Input>
        <Button>&rarr;</Button>
      </InputBox>
    </StyledContent>
  )
}

export default TextField
