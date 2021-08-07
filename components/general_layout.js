import {Component} from 'react';
import Footer from './footer';
import Navbar from './navbar';

const Layout = ({children}) => {
    return (
        <div className="min-h-screen bg-white">
            <Navbar/>
            {children}
            <Footer/>
        </div>
    );
}
 
export default Layout;