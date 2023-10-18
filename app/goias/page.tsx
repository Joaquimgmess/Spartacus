import Link from 'next/link'

export default function goias() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className='text-white text-5xl font-bold'>teste</h1>
      <Link className='text-white' href={'/'}>VOLTAR</Link>
    </main>
  )
}
