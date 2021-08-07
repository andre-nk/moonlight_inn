import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
    return ( 
        <div className="absolute z-20 min-w-full">
            <nav className="flex flex-row px-28 py-4 justify-between align-center bg-primary">
                <div className="logo">
                    <Image src="/logo.png" width="160px" height="34px"></Image>
                </div>
                <div className="flex flex-row">
                    <Link href="/"><a className="px-10 py-0 self-center leading-none font-body font-semibold">Home</a></Link>
                    <Link href="/"><a className="px-10 py-0 self-center font-body">Collection</a></Link>
                    <Link href="/"><a className="px-10 py-0 self-center font-body">Support</a></Link>
                </div>
            </nav>
        </div>
    );
}
 
export default Navbar;