import styled from 'styled-components'
import CardContainer from '../ui/CardContainer'
import HomesCard from '../ui/HomesCard'

const dataList = [
  {
    id: '001',
    estate: 'dansuman',
    HouseNo: '001',
    status: 'Apartment',
    type: 'rent',
    price: '1,000',
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
    estate: 'cantomenets',
    HouseNo: '001',
    status: 'apartment',
    type: 'rent',
    price: '750',
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
    estate: 'dzorwulu',
    HouseNo: '001',
    status: 'Apartment',
    type: 'buy',
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
    estate: 'airport hill',
    HouseNo: '001',
    status: 'umcompleted',
    type: 'House',
    price: '10,000',
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
    estate: 'spintex',
    HouseNo: '001',
    status: 'house',
    type: 'apartment',
    price: '20,000',
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
    estate: 'lashibi',
    HouseNo: '001',
    status: 'house',
    type: 'apartment',
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
    estate: 'ashongman',
    HouseNo: '001',
    status: 'apartment',
    type: 'buy',
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
    estate: 'kanda',
    HouseNo: '001',
    status: 'Semi-detached',
    type: 'buy',
    price: '20,000',
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
const Main = styled.main`
  padding: 2rem 6rem;
`

function Rents() {
  return (
    <Main>
      <CardContainer>
        {dataList.map((item) => (
          <HomesCard key={item.id} item={item} />
        ))}
      </CardContainer>
    </Main>
  )
}

export default Rents
