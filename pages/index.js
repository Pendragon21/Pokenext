import Head from 'next/head';

import useFetchPokemon from '../useRequest'
import Pokemon from '../components/Pokemon'

export default function IndexPage() {
  const { result, error } = useFetchPokemon()

  if (error) return <h1>Something went wrong!</h1>
  if (!result) return <h1>Loading...</h1>

  return (
    
    <main className='App'>
      
      <Head>
        <title>Pokenext</title>
        <meta name="Pokedex" content="Developed by Rafael Pendragon" />
        <link rel="shortcut icon" href="../public/favicon.ico" />
      </Head>

      <h1>Kanto Pokedéx</h1>
      <div>
        {result.results.map((pokemon) => (
          <Pokemon pokemon={pokemon} key={pokemon.name} />
        ))}
      </div>
    </main>
  )
}

