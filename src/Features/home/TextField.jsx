/* eslint react/prop-types: 0 */
import styled from 'styled-components'
import Heading from '../../ui/Heading'
import { devicesMax } from '../../styles/BreakPoint'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import { NavLink, useNavigate } from 'react-router-dom'
import Input from '../../ui/Input'
import { useState } from 'react'

// let dataList = [
//   {
//     id: '001',
//     type: 'buy',
//     estate: 'lakeside estate',
//     HouseNo: '001',
//     status: 'completed',
//     price: '950,000',
//     bed: 2,
//     bath: 3,
//     car: 5,
//     cover: '../../../house2.jpg',
//     description:
//       'Spacious three-story home with open-plan living spaces, perfect for large households. Five bedrooms and 4.5 bathrooms, including a main floor guest suite and upper floor en suite. Main floor with open-plan living room, dining room, and kitchen areas, mud room, tech zone, and pantry for additional storage. Second floor with four bedrooms including a vast master bedroom with en suite bath and two walk-in closets. Spacious attic recreation room with bathroom, great for extra entertainment space. Covered patio for cozy evenings dining or lounging outdoors.',
//     sqft: '4,069 SQFT.',
//     images: [],
//     loc: 'lakeside',
//     family: 'single family',
//     amenities:
//       'Air conditioning,Cooker,Fans,Garden Garage, Annexe (Boys quarter),Water reservoir,Swimming pool',
//   },
//   {
//     id: '002',
//     type: 'sell',
//     estate: 'elegant homes',
//     HouseNo: '001',
//     status: 'completed',
//     price: '750,000',
//     bed: 4,
//     bath: 4,
//     car: 1,
//     cover: '../../../house3.jpg',
//     description:
//       'Spacious three-story home with open-plan living spaces, perfect for large households. Five bedrooms and 4.5 bathrooms, including a main floor guest suite and upper floor en suite. Main floor with open-plan living room, dining room, and kitchen areas, mud room, tech zone, and pantry for additional storage. Second floor with four bedrooms including a vast master bedroom with en suite bath and two walk-in closets. Spacious attic recreation room with bathroom, great for extra entertainment space. Covered patio for cozy evenings dining or lounging outdoors.',
//     sqft: '2,069 SQFT.',
//     images: [],
//     loc: 'arminha',
//     family: 'single family',
//     amenities:
//       'Air conditioning,Cooker,Fans,Garden Garage, Annexe (Boys quarter),Water reservoir,Swimming pool',
//   },
//   {
//     id: '003',
//     type: 'rent',
//     estate: 'unique homes',
//     HouseNo: '001',
//     status: 'completed',
//     price: '3,650,000',
//     bed: 3,
//     bath: 3,
//     car: 3,
//     cover: '../../../house23.jpeg',
//     description:
//       'Spacious three-story home with open-plan living spaces, perfect for large households. Five bedrooms and 4.5 bathrooms, including a main floor guest suite and upper floor en suite. Main floor with open-plan living room, dining room, and kitchen areas, mud room, tech zone, and pantry for additional storage. Second floor with four bedrooms including a vast master bedroom with en suite bath and two walk-in closets. Spacious attic recreation room with bathroom, great for extra entertainment space. Covered patio for cozy evenings dining or lounging outdoors.',
//     sqft: '4,969 SQFT.',
//     images: [],
//     loc: 'lakeside',
//     family: 'single family',
//     amenities:
//       'Air conditioning,Cooker,Fans,Garden Garage, Annexe (Boys quarter),Water reservoir,Swimming pool',
//   },
//   {
//     id: '004',
//     type: 'buy',
//     estate: 'stonebridge Estates',
//     HouseNo: '001',
//     status: 'umcompleted',
//     price: '500,000',
//     bed: 2,
//     bath: 3,
//     car: 5,
//     cover: '../../../House4.jpg',
//     description:
//       'Spacious three-story home with open-plan living spaces, perfect for large households. Five bedrooms and 4.5 bathrooms, including a main floor guest suite and upper floor en suite. Main floor with open-plan living room, dining room, and kitchen areas, mud room, tech zone, and pantry for additional storage. Second floor with four bedrooms including a vast master bedroom with en suite bath and two walk-in closets. Spacious attic recreation room with bathroom, great for extra entertainment space. Covered patio for cozy evenings dining or lounging outdoors.',
//     sqft: '5,769 SQFT.',
//     images: [],
//     loc: 'east legon hills',
//     family: 'single family',
//     amenities:
//       'Air conditioning,Cooker,Fans,Garden Garage, Annexe (Boys quarter),Water reservoir,Swimming pool',
//   },
//   {
//     id: '005',
//     type: 'sell',
//     estate: 'hill Estates',
//     HouseNo: '001',
//     status: 'uncompleted',
//     price: '250,000',
//     bed: 2,
//     bath: 4,
//     car: 5,
//     cover: '../../../house44.jpeg',
//     description:
//       'Spacious three-story home with open-plan living spaces, perfect for large households. Five bedrooms and 4.5 bathrooms, including a main floor guest suite and upper floor en suite. Main floor with open-plan living room, dining room, and kitchen areas, mud room, tech zone, and pantry for additional storage. Second floor with four bedrooms including a vast master bedroom with en suite bath and two walk-in closets. Spacious attic recreation room with bathroom, great for extra entertainment space. Covered patio for cozy evenings dining or lounging outdoors.',
//     sqft: '1,069 SQFT.',
//     images: [],
//     loc: 'least legon hills',
//     family: 'single family',
//     amenities:
//       'Air conditioning,Cooker,Fans,Garden Garage, Annexe (Boys quarter),Water reservoir,Swimming pool',
//   },
//   {
//     id: '006',
//     type: 'rent',
//     estate: 'harbour view Estates',
//     HouseNo: '001',
//     status: 'completed',
//     price: '50,000',
//     bed: 5,
//     bath: 5,
//     car: 5,
//     cover: '../../../House5.jpg',
//     description:
//       'Spacious three-story home with open-plan living spaces, perfect for large households. Five bedrooms and 4.5 bathrooms, including a main floor guest suite and upper floor en suite. Main floor with open-plan living room, dining room, and kitchen areas, mud room, tech zone, and pantry for additional storage. Second floor with four bedrooms including a vast master bedroom with en suite bath and two walk-in closets. Spacious attic recreation room with bathroom, great for extra entertainment space. Covered patio for cozy evenings dining or lounging outdoors.',
//     sqft: '4,789 SQFT.',
//     images: [],
//     loc: 'lashibi',
//     family: 'single family',
//     amenities:
//       'Air conditioning,Cooker,Fans,Garden Garage, Annexe (Boys quarter),Water reservoir,Swimming pool',
//   },
//   {
//     id: '007',
//     type: 'buy',
//     estate: 'north celebraties Estate',
//     HouseNo: '001',
//     status: 'completed',
//     price: '1,550,000',
//     bed: 5,
//     bath: 4,
//     car: 2,
//     cover: '../../../house543.jpeg',
//     description:
//       'Spacious three-story home with open-plan living spaces, perfect for large households. Five bedrooms and 4.5 bathrooms, including a main floor guest suite and upper floor en suite. Main floor with open-plan living room, dining room, and kitchen areas, mud room, tech zone, and pantry for additional storage. Second floor with four bedrooms including a vast master bedroom with en suite bath and two walk-in closets. Spacious attic recreation room with bathroom, great for extra entertainment space. Covered patio for cozy evenings dining or lounging outdoors.',
//     sqft: '3,000 SQFT.',
//     images: [],
//     loc: 'lashibi',
//     family: 'single family',
//     amenities:
//       'Air conditioning,Cooker,Fans,Garden Garage, Annexe (Boys quarter),Water reservoir,Swimming pool',
//   },
//   {
//     id: '008',
//     type: 'sell',
//     estate: 'north celebraties Estate',
//     HouseNo: '001',
//     status: 'uncompleted',
//     price: '2,500,000',
//     bed: 2,
//     bath: 3,
//     car: 2,
//     cover: '../../../house56.jpeg',
//     description:
//       'Spacious three-story home with open-plan living spaces, perfect for large households. Five bedrooms and 4.5 bathrooms, including a main floor guest suite and upper floor en suite. Main floor with open-plan living room, dining room, and kitchen areas, mud room, tech zone, and pantry for additional storage. Second floor with four bedrooms including a vast master bedroom with en suite bath and two walk-in closets. Spacious attic recreation room with bathroom, great for extra entertainment space. Covered patio for cozy evenings dining or lounging outdoors.',
//     sqft: '5,000 SQFT.',
//     images: [],
//     loc: 'lashibi',
//     family: 'single family',
//     amenities:
//       'Air conditioning,Cooker,Fans,Garden Garage, Annexe (Boys quarter),Water reservoir,Swimming pool',
//   },
// ]

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

const Button = styled.button`
  background-color: var(--color-black-900);
  width: 3rem;
  height: 3rem;
  border-radius: 100px;
  border: none;
  position: absolute;
  right: 1rem;
  top: 5rem;
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
const Nav = styled.nav`
  width: 100%;
  display: flex;
  justify-content: space-around;
  margin-bottom: 2rem;
`

function TextField({ count, setCount }) {
  const [searchTerm, setSearchTerm] = useState('')
  const navigate = useNavigate()

  // if (type === 'sell')
  //   dataList = dataList.filter((sell) => sell.type === 'sell')
  // if (type === 'buy') dataList = dataList.filter((sell) => sell.type === 'buy')
  // if (type === 'rent')
  //   dataList = dataList.filter((sell) => sell.type === 'rent')

  function handleSearch(e) {
    e.preventDefault()
    console.log(searchTerm)
    navigate(`/buyhomes-search/${searchTerm}`)
  }

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
        <Nav>
          <NavLink>Sell</NavLink>
          <NavLink>Buy</NavLink>
          <NavLink>Rent</NavLink>
        </Nav>
        <form onSubmit={handleSearch}>
          {/* <Search setSearchTerm={setSearchTerm} /> */}
          <Input
            type="search"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Button>&rarr;</Button>
        </form>
      </InputBox>
      {/* <div>
        {dataList
          .filter((val) => {
            if (searchTerm == '') {
              return val
            } else if (val.loc.toLocaleLowerCase().includes(searchTerm)) {
              return val
            }
          })
          .map((val) => (
            <li key={val.id}>{val.loc}</li>
          ))}
      </div> */}
    </StyledContent>
  )
}

export default TextField
