import './globals.css'
// import { Inter } from 'next/font/google'

// const inter = Inter({ subsets: ['latin'] })

// export const metadata = {
//   title: 'Create Next App',
//   description: 'Generated by create next app',
// }
export const metadata = {
  title: "AkG's Netflix",
  description: 'Find info on any film you want in an easy and fast way.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link rel="icon" href="/fav.ico" sizes="any" />
      <body>{children}</body>
    </html>
  )
}
