import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
    <h1 className="italic text-chocolate text-6xl">
      Discover Your Needs!
    </h1>
    <h1 className="text-lightyellow text-4xl border-4">
    Discover Your Needs!
  </h1>
  </div>
  )
}
