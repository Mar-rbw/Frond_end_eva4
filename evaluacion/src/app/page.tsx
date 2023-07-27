import { Main } from 'next/document'
import Image from 'next/image'
import {BrowserRouter} from 'react-router-dom'
import { Header } from './layout/Header'
import { AppRouter } from './Router/AppRouter'
import { Footer } from './layout/Footer'


export default function Home() {
  return (
    <main>
      <BrowserRouter>
        <Header/>
        <AppRouter/>
        <Footer/>
      </BrowserRouter>
    </main>
  )
}
