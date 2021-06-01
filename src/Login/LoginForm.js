import React from 'react'
import Input from '../ui/Input'
import Button from '../ui/Button'


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
        <Input 
          label="Usuário" 
          type="text"
          id="username"
        />
        <Input 
          label="Senha" 
          type="password"
          id="password"
        />
        <Button>Entrar</Button>
      </form>
    </section>
  )
}

export default LoginForm