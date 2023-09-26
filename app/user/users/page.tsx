import React from 'react'
import type { InferGetStaticPropsType, GetStaticProps } from 'next'

interface Register {
  id: number
  name: string
}

const Register = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users',
    // caching only exist in fetch, axios not
    // { cache: 'no-store' } // always get cache data -- ALSO MAKE YOUR BUILD APP RENDERING SERVER SIDE (SSR) AS DYNAMIC (at request time)
    { next: { revalidate: 10 } } // get data every 10s -- ALSO MAKE YOUR BUILD APP RENDERING SERVER SIDE (SSR) AS STATIC (at build time)
  )
  const userData: Register[] = await res.json() // store in data cache

  return (
    <>
      <h1>User</h1>
      {new Date().toLocaleTimeString()}
      <ul>
        {userData.map(user => <li key={user.id}>{user.name}</li>)}
      </ul>
    </>
  )


}

export default Register