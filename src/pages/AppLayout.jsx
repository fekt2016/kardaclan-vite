import { Outlet } from 'react-router-dom'
import NavBar from '../ui/NavBar'

function AppLayout() {
  return (
    <>
      <NavBar />
      <div>header</div>
      <Outlet />
      <footer>footer</footer>
    </>
  )
}

export default AppLayout
