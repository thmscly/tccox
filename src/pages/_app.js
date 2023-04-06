import '@/styles/globals.css'
import { Roboto_Mono } from 'next/font/google'

const font = Roboto_Mono({
  subsets: ['latin'],
  weight: '400',
})

export default function App({ Component, pageProps }) {
  return (
    <main className={font.className}>
      <Component {...pageProps} />
    </main>)
}
