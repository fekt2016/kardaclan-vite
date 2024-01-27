import GlobalStyles from './styles/GlobalStyles'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AppLayout from './pages/AppLayout'
import HomePage from './pages/HomePage'
import AboutUs from './pages/AboutUs'
import Service from './pages/Service'
import Blog from './pages/Blog'
import Contact from './pages/Contact'
import Property from './pages/Property'
import ProPage from './pages/ProPage'

function App() {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AppLayout />}>
            <Route index element={<HomePage />} />
            <Route path="aboutUs" element={<AboutUs />} />
            <Route path="service" element={<Service />} />
            <Route path="blog" element={<Blog />} />
            <Route path="contact" element={<Contact />} />
            <Route path="properties" element={<Property />} />
            <Route path="property/:pro" element={<ProPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
