import React from 'react'

interface Register {
  id: number
  name: string
}

const Register = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users',
    // caching only exist in fetch, axios not
    // { cache: 'no-store' } // always get cache data
    { next: { revalidate: 10 } } // get data every 10s
  )
  const userData: Register[] = await res.json() // store in data cache

  return (
    <>
      <h1>User</h1>
      <ul>
        {userData.map(user => <li key={user.id}>{user.name}</li>)}
      </ul>
    </>
  )


}

export default Register