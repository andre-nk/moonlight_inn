import Layout from '../components/general_layout'
import '../styles/globals.css'
import AOS from "aos";
import {useEffect} from 'react'

function MyApp({ Component, pageProps }) {

  useEffect(() => {
    AOS.init({
      easing: "ease-out-cubic",
      once: true,
      offset: 50,
    });
  }, []);

  return (
    <Layout className="debug-screens">
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
