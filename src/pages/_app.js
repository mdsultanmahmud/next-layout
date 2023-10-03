import SingleLayout from '@/components/Layouts/SingleLayout'
import '@/styles/globals.css'

// no layouts system added here 
// export default function App({ Component, pageProps }) {
//   return <Component {...pageProps} />
// }


// single componenst layout system added here 
// export default function MyApp({ Component, pageProps }) {
//   return (
//     <SingleLayout>
//       <Component {...pageProps} />
//     </SingleLayout>
//   ) 
// }


//per page layout system added here

export default function MyApp({ Component, pageProps }) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout || ((page) => page)
 
  return getLayout(<Component {...pageProps} />)
}

