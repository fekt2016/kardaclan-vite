import { Outlet } from 'react-router-dom'
import NavBar from '../ui/NavBar'
import Header from '../Features/home/Header'
import Footer from '../ui/Footer'

function AppLayout() {
  return (
    <>
      <NavBar />
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

export default AppLayout
