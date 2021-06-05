import React from 'react'
import Input from '../ui/Input'
import Button from '../ui/Button'
import useForm from '../hooks/useForm'
import { UserContext } from '../UserContext'


const LoginForm = () => {

  const userName= useForm('email')
  const userPass= useForm()
  // faço a desestruturação direta ao invés de atribuir o retorno do objeto a uma variavel
  const {userLogin} = React.useContext(UserContext)

  console.log('LoginForm', {userName, userPass})
 
  async function handleSubmit(event){
    event.preventDefault()
    if(!userName.validate() && !userPass.validate()) return false
    try{
      userLogin(userName.value, userPass.value)
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