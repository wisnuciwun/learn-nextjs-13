import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className='display-flex w-100 h-100 justify-center align-items-center bg-purple-400'>
      <div>
        <h1>Halo guys</h1>
        <Link href="/user">Pengguna</Link>
      </div>
    </main>
  )
}
