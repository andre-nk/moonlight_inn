import Link from 'next/link';

const Footer = () => {
    return (
        <div className="flex flex-col lg:flex-row py-5 px-16 bg-footer justify-between z-20" >
            <Link href="/"><a className="text-white self-center">Privacy Policy</a></Link>
            <p className="text-white self-center py-2 lg:py-0">Copyright 2021; Moonlight Inn</p>
            <Link href="/"><a className="text-white self-center">moonlightinnsupport@gmail.com</a></Link>
        </div>
    );
}
 
export default Footer;