import styled from 'styled-components'
import Heading from '../../ui/Heading'
import Section from '../../ui/Section'

import { TbRulerMeasure } from 'react-icons/tb'
import { FaCar, FaBath, FaBed, FaRegBuilding } from 'react-icons/fa'
import { devicesMax } from '../../styles/BreakPoint'

const dataList = [
  {
    id: '001',
    estate: 'lakeside estate',
    HouseNo: '001',
    status: 'completed',
    price: '950,000',
    bed: 2,
    bath: 3,
    car: 5,
    cover: '../../../house2.jpg',
    description:
      'Spacious three-story home with open-plan living spaces, perfect for large households. Five bedrooms and 4.5 bathrooms, including a main floor guest suite and upper floor en suite. Main floor with open-plan living room, dining room, and kitchen areas, mud room, tech zone, and pantry for additional storage. Second floor with four bedrooms including a vast master bedroom with en suite bath and two walk-in closets. Spacious attic recreation room with bathroom, great for extra entertainment space. Covered patio for cozy evenings dining or lounging outdoors.',
    sqft: '4,069 SQFT.',
    images: [],
    family: 'single family',
    amenities:
      'Air conditioning,Cooker,Fans,Garden Garage, Annexe (Boys quarter),Water reservoir,Swimming pool',
  },
  {
    id: '002',
    estate: 'elegant homes',
    HouseNo: '001',
    status: 'completed',
    price: '750,000',
    bed: 4,
    bath: 4,
    car: 1,
    cover: '../../../house3.jpg',
    description:
      'Spacious three-story home with open-plan living spaces, perfect for large households. Five bedrooms and 4.5 bathrooms, including a main floor guest suite and upper floor en suite. Main floor with open-plan living room, dining room, and kitchen areas, mud room, tech zone, and pantry for additional storage. Second floor with four bedrooms including a vast master bedroom with en suite bath and two walk-in closets. Spacious attic recreation room with bathroom, great for extra entertainment space. Covered patio for cozy evenings dining or lounging outdoors.',
    sqft: '2,069 SQFT.',
    images: [],
    family: 'single family',
    amenities:
      'Air conditioning,Cooker,Fans,Garden Garage, Annexe (Boys quarter),Water reservoir,Swimming pool',
  },
  {
    id: '003',
    estate: 'unique homes',
    HouseNo: '001',
    status: 'completed',
    price: '3,650,000',
    bed: 3,
    bath: 3,
    car: 3,
    cover: '../../../house23.jpeg',
    description:
      'Spacious three-story home with open-plan living spaces, perfect for large households. Five bedrooms and 4.5 bathrooms, including a main floor guest suite and upper floor en suite. Main floor with open-plan living room, dining room, and kitchen areas, mud room, tech zone, and pantry for additional storage. Second floor with four bedrooms including a vast master bedroom with en suite bath and two walk-in closets. Spacious attic recreation room with bathroom, great for extra entertainment space. Covered patio for cozy evenings dining or lounging outdoors.',
    sqft: '4,969 SQFT.',
    images: [],
    family: 'single family',
    amenities:
      'Air conditioning,Cooker,Fans,Garden Garage, Annexe (Boys quarter),Water reservoir,Swimming pool',
  },
  {
    id: '004',
    estate: 'stonebridge Estates',
    HouseNo: '001',
    status: 'umcompleted',
    price: '500,000',
    bed: 2,
    bath: 3,
    car: 5,
    cover: '../../../House4.jpg',
    description:
      'Spacious three-story home with open-plan living spaces, perfect for large households. Five bedrooms and 4.5 bathrooms, including a main floor guest suite and upper floor en suite. Main floor with open-plan living room, dining room, and kitchen areas, mud room, tech zone, and pantry for additional storage. Second floor with four bedrooms including a vast master bedroom with en suite bath and two walk-in closets. Spacious attic recreation room with bathroom, great for extra entertainment space. Covered patio for cozy evenings dining or lounging outdoors.',
    sqft: '5,769 SQFT.',
    images: [],
    family: 'single family',
    amenities:
      'Air conditioning,Cooker,Fans,Garden Garage, Annexe (Boys quarter),Water reservoir,Swimming pool',
  },
  {
    id: '005',
    estate: 'hill Estates',
    HouseNo: '001',
    status: 'uncompleted',
    price: '250,000',
    bed: 2,
    bath: 4,
    car: 5,
    cover: '../../../house44.jpeg',
    description:
      'Spacious three-story home with open-plan living spaces, perfect for large households. Five bedrooms and 4.5 bathrooms, including a main floor guest suite and upper floor en suite. Main floor with open-plan living room, dining room, and kitchen areas, mud room, tech zone, and pantry for additional storage. Second floor with four bedrooms including a vast master bedroom with en suite bath and two walk-in closets. Spacious attic recreation room with bathroom, great for extra entertainment space. Covered patio for cozy evenings dining or lounging outdoors.',
    sqft: '1,069 SQFT.',
    images: [],
    family: 'single family',
    amenities:
      'Air conditioning,Cooker,Fans,Garden Garage, Annexe (Boys quarter),Water reservoir,Swimming pool',
  },
  {
    id: '006',
    estate: 'harbour view Estates',
    HouseNo: '001',
    status: 'completed',
    price: '50,000',
    bed: 5,
    bath: 5,
    car: 5,
    cover: '../../../House5.jpg',
    description:
      'Spacious three-story home with open-plan living spaces, perfect for large households. Five bedrooms and 4.5 bathrooms, including a main floor guest suite and upper floor en suite. Main floor with open-plan living room, dining room, and kitchen areas, mud room, tech zone, and pantry for additional storage. Second floor with four bedrooms including a vast master bedroom with en suite bath and two walk-in closets. Spacious attic recreation room with bathroom, great for extra entertainment space. Covered patio for cozy evenings dining or lounging outdoors.',
    sqft: '4,789 SQFT.',
    images: [],
    family: 'single family',
    amenities:
      'Air conditioning,Cooker,Fans,Garden Garage, Annexe (Boys quarter),Water reservoir,Swimming pool',
  },
  {
    id: '007',
    estate: 'north celebraties Estate',
    HouseNo: '001',
    status: 'completed',
    price: '1,550,000',
    bed: 5,
    bath: 4,
    car: 2,
    cover: '../../../house543.jpeg',
    description:
      'Spacious three-story home with open-plan living spaces, perfect for large households. Five bedrooms and 4.5 bathrooms, including a main floor guest suite and upper floor en suite. Main floor with open-plan living room, dining room, and kitchen areas, mud room, tech zone, and pantry for additional storage. Second floor with four bedrooms including a vast master bedroom with en suite bath and two walk-in closets. Spacious attic recreation room with bathroom, great for extra entertainment space. Covered patio for cozy evenings dining or lounging outdoors.',
    sqft: '3,000 SQFT.',
    images: [],
    family: 'single family',
    amenities:
      'Air conditioning,Cooker,Fans,Garden Garage, Annexe (Boys quarter),Water reservoir,Swimming pool',
  },
  {
    id: '008',
    estate: 'north celebraties Estate',
    HouseNo: '001',
    status: 'uncompleted',
    price: '2,500,000',
    bed: 2,
    bath: 3,
    car: 2,
    cover: '../../../house56.jpeg',
    description:
      'Spacious three-story home with open-plan living spaces, perfect for large households. Five bedrooms and 4.5 bathrooms, including a main floor guest suite and upper floor en suite. Main floor with open-plan living room, dining room, and kitchen areas, mud room, tech zone, and pantry for additional storage. Second floor with four bedrooms including a vast master bedroom with en suite bath and two walk-in closets. Spacious attic recreation room with bathroom, great for extra entertainment space. Covered patio for cozy evenings dining or lounging outdoors.',
    sqft: '5,000 SQFT.',
    images: [],
    amenities:
      'Air conditioning,Cooker,Fans,Garden Garage, Annexe (Boys quarter),Water reservoir,Swimming pool',
  },
]
const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;

  @media ${devicesMax.lg} {
    grid-template-columns: repeat(3, 1fr);
  }
  @media ${devicesMax.md} {
    grid-template-columns: repeat(2, 1fr);
  }
  @media ${devicesMax.sm} {
    grid-template-columns: 1fr;
  }
`
const Card = styled.div`
  padding: 1rem;
  background-color: var(--color-grey-200);
  border-radius: 10px;
  overflow: hidden;
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
const P = styled.p`
  font-size: 2rem;
  font-weight: 500;
  font-family: 'Poppins' Arial, Helvetica, sans-serif;
  text-transform: capitalize;
  color: var(--color-white-900);
`
const StyledStatus = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;

  span {
    text-transform: capitalize;
  }
`
const Price = styled.span`
  font-size: 2rem;
  font-weight: bold;
`

const StyledDetil = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 1rem;
`
const StyledTop = styled.div`
  padding: 1rem;
  display: flex;
`
const Button = styled.button`
  padding: 0.2rem 1.5rem;
  width: 100%;
`

const HeadingBox = styled.div`
  text-align: center;
  margin-bottom: 4rem;
`
const TextBox = styled.div`
  width: 50%;
  margin: 0 auto;

  @media ${devicesMax.md} {
    width: 70%;
  }
  @media ${devicesMax.sm} {
    width: 95%;
    font-size: 1.2rem;
  }
`
function House() {
  return (
    <Section>
      <HeadingBox>
        <Heading as="h2">Explore homes on KardaClan</Heading>
        <TextBox>
          <p>
            Take a deep dive and browse homes for sale, original neighborhood
            photos, resident reviews and local insights to find what is right
            for you.
          </p>
        </TextBox>
      </HeadingBox>
      <CardContainer>
        {dataList.map((item) => (
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
          </Card>
        ))}
      </CardContainer>
    </Section>
  )
}

export default House
