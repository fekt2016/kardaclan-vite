import styled from 'styled-components'
import Heading from '../../ui/Heading'
import { devicesMax } from '../../styles/BreakPoint'

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

function TextField() {
  return (
    <StyledContent>
      <div>
        <Heading as="h1">Your Next home is here</Heading>
      </div>
      <InputBox>
        <Input type="search" placeholder="enter location"></Input>
        <Button>&rarr;</Button>
      </InputBox>
    </StyledContent>
  )
}

export default TextField
