import GlobalStyles from './styles/GlobalStyles'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AppLayout from './pages/AppLayout'
import HomePage from './pages/HomePage'
import AboutUs from './pages/AboutUs'
import Contact from './pages/Contact'
// import ProPage from './pages/Buy'
import Buy from './pages/Buy'
import Sell from './pages/Sell'
import Rents from './pages/Rents'
import Agents from './pages/Agents'
import BuyHomesSearch from './pages/BuyHomesSearch'

function App() {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AppLayout />}>
            <Route index element={<HomePage />} />
            <Route path="about" element={<AboutUs />} />
            <Route path="Rent" element={<Rents />} />
            <Route path="Agents" element={<Agents />} />
            <Route path="sell" element={<Sell />} />
            <Route path="contact" element={<Contact />} />
            <Route path="buyhomes" element={<Buy />} />
            <Route
              path="buyhomes-search/:location"
              element={<BuyHomesSearch />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
