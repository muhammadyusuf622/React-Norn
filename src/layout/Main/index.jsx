import { MainWrapper, TopContentWrapper } from './Main.styles'
import Footer from '../Footer'
import Navbar from '../Navbar'
import { Outlet } from 'react-router-dom'

const MainLayout = ({children}) => {
  return (
    <MainWrapper>
      <TopContentWrapper>
        <Navbar />
        {children}
      </TopContentWrapper>
      <Footer />
    </MainWrapper>
  )
}

export default MainLayout;