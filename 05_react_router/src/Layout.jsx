import { Outlet } from 'react-router-dom'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'

const Layout = () => {
    return (
        <>
            <div className='min-h-screen flex flex-col'>
                <Header />
                <div className='flex-grow'>
                    <Outlet />
                </div>
                <Footer />
            </div>
        </>
    )
}

export default Layout
