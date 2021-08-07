import Link from 'next/link';

const Footer = () => {
    return (
        <div className="flex flex-row py-5 px-16 bg-footer justify-between z-20" >
            <Link href="/"><a className="text-white" >Privacy Policy</a></Link>
            <p className="text-white">Copyright 2021; Moonlight Inn</p>
            <Link href="/"><a className="text-white">moonlightinnsupport@gmail.com</a></Link>
        </div>
    );
}
 
export default Footer;