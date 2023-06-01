import MinFooter from "./MinFooter/index"
import ResponsiveAppBar from "./Navbar"

const Layout  = ({children}:any)=>{
    return <div 
    // className=" h-screen flex flex-col justify-between"
    >
    <ResponsiveAppBar/>
    {children}
    <MinFooter/>
    </div>
}

export default Layout