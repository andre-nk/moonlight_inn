import Footer from './footer';
import Navbar from './navbar';

const Layout = ({children}) => {
    return (
        <div className="min-h-screen bg-white debug-screens">
            <div className="sticky top-0 bg-primary z-50 lg:relative">
                <Navbar/>
            </div>
            {children}
            <Footer/>
        </div>
    );
}
 
export default Layout;