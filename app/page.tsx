import Image from 'next/image';
import Link from 'next/link';

const states = [
  {
    name: 'Amazonas',
    path: '/amazonas',
  },
  {
    name: 'Ceará',
    path: '/ceara',
  },
  {
    name: 'Distrito Federal',
    path: '/distrito-federal',
  },
  {
    name: 'Espírito Santo',
    path: '/espirito-santo',
  },
  {
    name: 'Goiás',
    path: '/goias',
  },
  {
    name: 'Minas Gerais',
    path: '/minas-gerais',
  },
  {
    name: 'Piauí',
    path: '/piaui',
  },
  {
    name: 'Rio de Janeiro',
    path: '/rio-de-janeiro',
  },
  {
    name: 'São Paulo',
    path: '/sao-paulo',
  },

];

export default function Home() {
  return (
    <main>
      <div className='flex flex-col items-center justify-center'>
        <h1 className='text-white text-3xl font-bold my-4'>Escolha um estado</h1>
        <div className='flex flex-col'>
          {states.map((state, index) => (
            <Link href={state.path} key={index} className='text-white text-2xl my-2'>
              {state.name}
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
