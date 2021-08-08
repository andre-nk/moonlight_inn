import Layout from '../components/general_layout'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <Layout className="debug-screens">
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
