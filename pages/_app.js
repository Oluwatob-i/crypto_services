import '../styles/globals.css'
import '../styles/home.css'


function MyApp({ Component, pageProps }) {
  if (typeof window !== 'undefined') {
    return (
      <Component 
       {...pageProps} 
     /> 
 )
} else {
  return ''
} 
  
}

export default MyApp
