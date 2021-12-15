import '../styles/globals.css'
import Header from "../Components/Header";



function MyApp({ Component, pageProps }){
  return (
    <>
     <Header/>
    <main>
      <Component {...pageProps} />
    </main>
   
    </>
  )
}

export default MyApp
