import '@/styles/globals.css'
import { IBM_Plex_Mono } from 'next/font/google'

const ibm = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: '400',
})

export default function App({ Component, pageProps }) {
  return (
    <main className={ibm.className}>
      <Component {...pageProps} />
    </main>)
}
