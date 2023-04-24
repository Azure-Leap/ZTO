import MinFooter from "./MinFooter/index"
import ResponsiveAppBar from "./Navbar"

const Layout  = ({children}:any)=>{
    return <>
    <ResponsiveAppBar/>
    {children}
  
    </>
}

export default Layout