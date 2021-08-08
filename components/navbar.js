import Link from 'next/link';
import Image from 'next/image';
import MenuDropdown from './menu_dropdown';

const Navbar = () => {
    return ( 
        <div className="absolute z-20 min-w-full">
            <nav className="flex flex-row sm:px-16 lg:px-28 py-4 justify-between align-center bg-primary">
                <div className="lg:flex-row hidden lg:flex lg:order-2">
                    <Link href="/"><a className="pr-10 py-0 self-center leading-none font-body font-semibold">Home</a></Link>
                    <Link href="/"><a className="px-10 py-0 self-center font-body">Collection</a></Link>
                    <Link href="/"><a className="px-10 py-0 self-center font-body">Support</a></Link>
                </div>
                <div className="flex lg:hidden self-center">
                   <MenuDropdown/>
                </div>
                <div className="logo lg:order-1">
                    <Image src="/logo.png" width="160px" height="34px"></Image>
                </div>
            </nav>
        </div>
    );
}
 
export default Navbar;