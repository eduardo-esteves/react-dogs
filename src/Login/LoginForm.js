import React from 'react'
import Input from '../ui/Input'
import Button from '../ui/Button'
import useForm from '../hooks/useForm'
import { TOKEN_POST } from '../api'


const LoginForm = () => {
  const userName= useForm('email')
  const userPass= useForm()
  console.log({userName, userPass})
  
  function handleSubmit(event){
    event.preventDefault()
    if(!userName.validate() && !userPass.validate()) return false
    const {url, options} = TOKEN_POST({
      username : userName.value,
      password : userPass.value
    })
    fetch(url, options)
      .then( resp => resp.json())
      .then(userDados => {
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
          {...userName}
        />
        <Input 
          label="Senha" 
          type="password"
          id="password"
          {...userPass}
        />
        <Button>Entrar</Button>
      </form>
    </section>
  )
}

export default LoginForm