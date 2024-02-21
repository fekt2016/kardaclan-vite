/* eslint react/prop-types: 0 */
import styled from 'styled-components'
import { TbRulerMeasure } from 'react-icons/tb'
import { FaCar, FaBath, FaBed, FaRegBuilding } from 'react-icons/fa'

const Card = styled.div`
  padding: 1rem;
  background-color: var(--color-grey-200);
  border-radius: 10px;
  overflow: hidden;
  position: relative;
`
const ImgBox = styled.div`
  height: 200px;
  padding: 2rem;
  background-image: ${(props) => `url(${props.background})`};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  display: flex;
  align-items: flex-end;
`
const StyledDetil = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 1rem;
`
const StyledStatus = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;

  span {
    text-transform: capitalize;
  }
`
const P = styled.p`
  font-size: 2rem;
  font-weight: 500;
  font-family: 'Poppins' Arial, Helvetica, sans-serif;
  text-transform: capitalize;
  color: var(--color-white-900);
`
const StyledTop = styled.div`
  padding: 1rem;
  display: flex;
`
const Price = styled.span`
  font-size: 2rem;
  font-weight: bold;
`
const Button = styled.button`
  padding: 0.2rem 1.5rem;
  width: 100%;
`
// const StyledType = styled.span`
//   background-color: var(--color-red-900);
//   position: absolute;
//   right: 1rem;
//   top: 1rem;
//   padding: 1rem;
//   margin: 0.5rem;
//   box-shadow: var(-shadow-sm);
//   border-radius: 100px;
// `

function HomesCard({ item }) {
  return (
    <Card key={item.id}>
      <ImgBox background={item.cover}>
        <P>{item.estate}</P>
      </ImgBox>
      <StyledTop>
        <StyledStatus>
          <span>{item.status}</span>
          <Price>${item.price}</Price>
        </StyledStatus>
        <div>
          <FaRegBuilding />
        </div>
      </StyledTop>
      <StyledDetil>
        <div>
          <FaBed />
          <div>
            {item.bed} <span>bed</span>
          </div>
        </div>
        <div>
          <FaBath />
          <div>
            {item.bath} <span>bed</span>
          </div>
        </div>
        <div>
          <TbRulerMeasure />
          <div>{item.sqft}</div>
        </div>
        <div>
          <FaCar />
          <div>{item.car}</div>
        </div>
      </StyledDetil>
      <Button>Detail Info</Button>
      {/* <StyledType>{item.type}</StyledType> */}
    </Card>
  )
}

export default HomesCard
