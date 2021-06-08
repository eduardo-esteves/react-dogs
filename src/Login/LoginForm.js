import React from 'react'
import Input from '../ui/Input'
import Button from '../ui/Button'
import useForm from '../hooks/useForm'
import { UserContext } from '../UserContext'


const LoginForm = () => {

  const userName= useForm('email')
  const userPass= useForm()
  // faço a desestruturação direta ao invés de atribuir o retorno do objeto a uma variavel
  const { userLogin, error, loading, navigate, login } = React.useContext(UserContext)

  console.log('LoginForm', {userName, userPass})
 
  async function handleSubmit(event){
    event.preventDefault()
    if(!userName.validate() && !userPass.validate()) return false
    try{
      await userLogin(userName.value, userPass.value)
    }catch(e){
      console.error(e)
    }finally{
      if(login) navigate('/conta')
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
        { loading 
          ? ( <Button disabled>Carregando...</Button> )
          : ( <Button>Entrar</Button> )
        }
        { error && <p>{error}</p> }
      </form>
    </section>
  )
}

export default LoginForm