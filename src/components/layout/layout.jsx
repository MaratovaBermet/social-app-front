import Header from "./Header/Header";
import Sideber from "./Sideber/Sideber";
import {Outlet} from 'react-router-dom';


const Layout = () => {
    return (
        <>
           <Header/>
           <main>
               <Sideber/>
               <Outlet/>
           </main>
        </>
    );
};

export default Layout;