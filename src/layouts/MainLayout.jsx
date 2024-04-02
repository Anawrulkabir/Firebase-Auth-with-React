import Nav from '../components/Nav'
import Footer from '../components/Footer'
import { Outlet } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'

const MainLayout = () => {
  return (
    <div>
      <Nav></Nav>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  )
}

export default MainLayout
