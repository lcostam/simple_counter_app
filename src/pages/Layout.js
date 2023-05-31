import { Outlet } from "react-router-dom";
import Footer from "../Footer";
import Menu from "../Menu";

const Layout = () => {
  return (
    <>
        <Menu/>
        <div className="w3-content" style={{maxWidth:2000, marginTop:46}}>
            <Outlet />
        </div>
        <Footer/>
    </>
  )
};

export default Layout;