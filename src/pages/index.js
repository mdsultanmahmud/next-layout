import RootLayout from "@/components/Layouts/RootLayout"
import Head from "next/head"

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Next Home Page</title>
        <meta name="home page" description="this is page is created by next.js"/>
      </Head>
      <h1>This is our Home page</h1>
      <h2>We see our layout system working..</h2>
    </>
  )
}

HomePage.getLayout = function getLayout(page) {
  return (
    <RootLayout>
      {page}
    </RootLayout>
  )
}