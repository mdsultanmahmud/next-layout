import RootLayout from "@/components/Layouts/RootLayout"

export default function HomePage() {
  return (
    <>
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