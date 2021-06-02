import React from 'react'
import Input from '../ui/Input'
import Button from '../ui/Button'
import useForm from '../hooks/useForm'
import { TOKEN_POST, USER_GET } from '../api'


const LoginForm = () => {

  const userName= useForm('email')
  const userPass= useForm()
  console.log({userName, userPass})

  async function getUser(token) {
    const {url, options} = USER_GET(token)
    try{
      const response = await fetch(url, options)
      if(response.status === 200){
        const json = await response.json()
        console.log(json)
      }
    }catch(e){
      console.error()
    }
  }

  React.useEffect( () => {
    const token = window.localStorage.getItem('token')
    if(token){
      getUser(token)
    }
  })
  
  async function handleSubmit(event){
    event.preventDefault()
    if(!userName.validate() && !userPass.validate()) return false
    const {url, options} = TOKEN_POST({
      username : userName.value,
      password : userPass.value
    })
    try{
      const response = await fetch(url, options)
      if(response.status === 200){
        const json = await response.json()
        localStorage.setItem('token', json.token)
      }
    }catch(e){
      console.error(e)
    }
    
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