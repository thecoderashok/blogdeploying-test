import '../styles/globals.css'
import Header from "../pages/Components/Header";

function MyApp({ Component, pageProps }) {
  return (
    <body>
      <Header/>
    <main>
      <Component {...pageProps} />
    </main>
    </body>
  )
}

export default MyApp
