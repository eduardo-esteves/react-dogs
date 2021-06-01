import React from 'react'

const LoginForm = () => {

  const [username, setUsername] = React.useState('')
  const [password, setPassword] = React.useState('')

  function handleSubmit(event){
    event.preventDefault()
    fetch('https://dogsapi.origamid.dev/json/jwt-auth/v1/token',{
      method : 'POST',
      headers : {
        'Content-Type' : 'application/json'
      },
      body : JSON.stringify({username, password})
    }).then( resp => {
      return resp.json()
      console.log(resp)
    }).then(userDados => {
      console.log(userDados)
    })
  }

  return(
    <section className="container">
      <h1>Login</h1>
      <form action="" onSubmit={handleSubmit}>
        <input 
          type="text"
          value={username}
          onChange={({ target }) => setUsername(target.value)}
        />
        <input 
          type="text"
          value={password}
          onChange={({ target }) => setPassword(target.value)}
        />
        <button>Entrar</button>
      </form>
    </section>
  )
}

export default LoginForm