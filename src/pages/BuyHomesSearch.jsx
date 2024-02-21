import { useParams } from 'react-router-dom'
import HomesCard from '../ui/HomesCard'
import CardContainer from '../ui/CardContainer'

const dataList = [
  {
    id: '001',
    type: 'buy',
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
    loc: 'lakeside',
    family: 'single family',
    amenities:
      'Air conditioning,Cooker,Fans,Garden Garage, Annexe (Boys quarter),Water reservoir,Swimming pool',
  },
  {
    id: '002',
    type: 'sell',
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
    loc: 'arminha',
    family: 'single family',
    amenities:
      'Air conditioning,Cooker,Fans,Garden Garage, Annexe (Boys quarter),Water reservoir,Swimming pool',
  },
  {
    id: '003',
    type: 'rent',
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
    loc: 'lakeside',
    family: 'single family',
    amenities:
      'Air conditioning,Cooker,Fans,Garden Garage, Annexe (Boys quarter),Water reservoir,Swimming pool',
  },
  {
    id: '004',
    type: 'buy',
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
    loc: 'east legon hills',
    family: 'single family',
    amenities:
      'Air conditioning,Cooker,Fans,Garden Garage, Annexe (Boys quarter),Water reservoir,Swimming pool',
  },
  {
    id: '005',
    type: 'sell',
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
    loc: 'least legon hills',
    family: 'single family',
    amenities:
      'Air conditioning,Cooker,Fans,Garden Garage, Annexe (Boys quarter),Water reservoir,Swimming pool',
  },
  {
    id: '006',
    type: 'rent',
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
    loc: 'lashibi',
    family: 'single family',
    amenities:
      'Air conditioning,Cooker,Fans,Garden Garage, Annexe (Boys quarter),Water reservoir,Swimming pool',
  },
  {
    id: '007',
    type: 'buy',
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
    loc: 'lashibi',
    family: 'single family',
    amenities:
      'Air conditioning,Cooker,Fans,Garden Garage, Annexe (Boys quarter),Water reservoir,Swimming pool',
  },
  {
    id: '008',
    type: 'sell',
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
    loc: 'lashibi',
    family: 'single family',
    amenities:
      'Air conditioning,Cooker,Fans,Garden Garage, Annexe (Boys quarter),Water reservoir,Swimming pool',
  },
]

function BuyHomesSearch() {
  const params = useParams()
  const loc = params.location

  const search = dataList.filter((data) => data.loc === loc)
  if (search.length === 0) return <p>No homes found with this search result</p>

  return (
    <main>
      <CardContainer>
        {search.map((item) => (
          <HomesCard key={item.id} item={item} />
        ))}
      </CardContainer>
    </main>
  )
}

export default BuyHomesSearch
