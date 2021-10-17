const Footer = () => {

    var mailURL = "https://mail.google.com/mail/u/0/?fs=1&to=moonlightinnsupport@gmail.com&su=Needed+Support+on+Moonlight+Inn+Website+&body=Hi%20there&tf=cm";
    var privacyPolicyURL = "https://www.privacypolicygenerator.info/live.php?token=tFfIuGk5gGdWNgb5bPK2kztcXC8EHiaC";

    return (
        <div className="flex flex-col lg:flex-row py-5 px-16 bg-footer justify-between z-20" >
            <a href={privacyPolicyURL} target="_blank" className="text-white self-center">Privacy Policy</a>
            <p className="text-white self-center py-2 lg:py-0">Copyright 2021; Moonlight Inn</p>
            <a href={mailURL} target="_blank" className="text-white self-center">moonlightinnsupport@gmail.com</a>
        </div>
    );
}
 
export default Footer;