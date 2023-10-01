import Header from "./Header/Header";
import Sideber from "./Sideber/Sideber";
import {Outlet} from 'react-router-dom';
import Footer from "./Footer/Footer";


const Layout = () => {
    return (
        <>
           <Header/>
           <main>
               <Sideber/>
               <Outlet/>
           </main>
           <Footer/>
        </>
    );
};

export default Layout;