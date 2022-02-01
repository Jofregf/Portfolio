import '../Style/Index.css'
import '../Style/Navbar.css'
import '../Style/About.css'
import '../Style/Projects.css'
import '../Style/Resume.css'
import '../Style/404.css'
import '../public/global.css'
import '../Style/Footer.css'
import '../Style/github.css'
import Head from "next/head"



function MyApp({ Component, pageProps }) {
    return ( 
      <>
      <Head>
          <title>GJ Portfolio</title>
          </Head>
    <Component {...pageProps} />
      </>
    )
  }

  export default MyApp