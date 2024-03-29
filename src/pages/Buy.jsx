import styled from 'styled-components'
import CardContainer from '../ui/CardContainer'
import HomesCard from '../ui/HomesCard'
import Form from '../ui/Form'
import Input from '../ui/Input'
import Select from '../ui/Select'
const dataList = [
  {
    id: '001',
    estate: 'lakeside estate',
    HouseNo: '001',
    status: 'completed',
    type: 'buy',
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
    type: 'buy',
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
    estate: 'stonebridge Estates',
    HouseNo: '001',
    status: 'umcompleted',
    type: 'buy',
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
    type: 'buy',
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
    type: 'buy',
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
    estate: 'north celebraties Estate',
    HouseNo: '001',
    status: 'uncompleted',
    type: 'buy',
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

const options = [
  { value: '100,000', label: 'Gh100k' },
  { value: '250,000', label: 'Gh250k' },
  { value: '500,000', label: 'Gh500k' },
  { value: '750,000', label: 'Gh750k' },
  { value: '1,000,000', label: 'Gh1M' },
]
const ProOptions = [
  { value: 'any', label: 'Any' },
  { value: 'house', label: 'House' },
  { value: 'condo', label: 'Condo' },
  { value: 'townhome', label: 'TownHome' },
  { value: 'fulti family', label: 'Multi-family' },
  { value: 'mobile', label: 'Mobile' },
  { value: 'land', label: 'Land' },
]

const Main = styled.main`
  padding: 2rem 6rem;
`

const FormBox = styled.div`
  padding: 1rem 2rem;
  /* background-color: red; */

  display: flex;
  justify-content: space-between;
`
const MapBox = styled.div`
  flex-basis: 7%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
function Buy() {
  return (
    <Main>
      <FormBox>
        <Form>
          <Input type="search" placeholder="Accra Ac" />
          <Select options={options} />
          <Select options={ProOptions} />
        </Form>
        <MapBox>
          <div>list</div>
          <div>map</div>
        </MapBox>
      </FormBox>

      <CardContainer>
        {dataList.map((item) => (
          <HomesCard key={item.id} item={item} />
        ))}
      </CardContainer>
    </Main>
  )
}

export default Buy
