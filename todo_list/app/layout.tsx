//import './globals.css'
import bg from "./wbgp.jpg";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body  style={{backgroundImage: `url(${bg.src})`,backgroundRepeat: 'no-repeat',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    width: '100vw'}}>
        {children}
        </body>
    </html>
  )
}
