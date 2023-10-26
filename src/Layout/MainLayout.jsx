import { Outlet } from "react-router-dom"
import Footer from "../Components/Footer/Footer"
import Header from "../Components/Header/Header"

function MainLayout() {
  return (
    <div className="overflow-hidden w-screen h-screen">
        <Header/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default MainLayout
