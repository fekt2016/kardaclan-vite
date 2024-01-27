import { Outlet } from 'react-router-dom'
import NavBar from '../ui/NavBar'
import Header from '../Features/home/Header'

function AppLayout() {
  return (
    <>
      <NavBar />
      <Header />
      <Outlet />
      <footer>footer</footer>
    </>
  )
}

export default AppLayout
