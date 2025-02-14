import { useEffect, useState } from 'react'


function App() {

  const [user, setuser] = useState([])
  useEffect(() => {
    fetch('http://localhost:5000/users')
      .then(res => res.json())
      .then(data => setuser(data))
  }
    , [])

  const handleadduser = e => {
    e.preventDefault()
    const name = e.target.name.value
    const email = e.target.email.value;
    const user2 = { name, email }
        e.target.reset()
    console.log(user2)


    fetch('http://localhost:5000/users', {
      method: 'POST',
      headers: {

        'content-type': 'application/json'
      },
      body: JSON.stringify(user)
    })

      .then(res => res.json())
      .then(data => {
        console.log(data);
        const newUser = [...user, data];
        setuser(newUser)
        
      })

  }
  return (
    <>
      <div>
        <form onSubmit={handleadduser}>
          <input type='text' name='name' id='' ></input>
          <br></br>
          <input type='email' name='email' id='' ></input>
          <br></br>
          <input type='submit' id='' ></input>


        </form>

        <h1>user managment client</h1>
        <h2>Number Of User: {user.length}</h2>
        <h2>{
          user.map(user => <p>id: {user.id}  {user.email}  Password: {user.password}</p>)
        }</h2>
      </div>
      <div>

      </div>

    </>
  )
}

export default App
