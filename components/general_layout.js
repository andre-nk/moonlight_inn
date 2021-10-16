import Footer from './footer';
import Navbar from './navbar';

const Layout = ({children}) => {
    return (
        <div className="min-h-screen bg-primary debug-screens">
            <div className="relative bg-primary">
                <Navbar/>
            </div>
            <div className="relative">
                {children}
            </div>
            <div className="relative">
                <Footer/>
            </div>
        </div>
    );
}
 
export default Layout;