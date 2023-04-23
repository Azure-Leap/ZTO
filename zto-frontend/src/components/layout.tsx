import Footer from "./Footer"
import ResponsiveAppBar from "./Navbar"

const Layout  = ({children}:any)=>{
    return <>
    <ResponsiveAppBar/>
    {children}
    <Footer/>
    </>
}

export default Layout