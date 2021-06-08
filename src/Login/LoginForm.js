import React from 'react'
import styles from './LoginForm.module.css'
import Input from '../ui/Input'
import Button from '../ui/Button'
import useForm from '../hooks/useForm'
import { UserContext } from '../UserContext'
import Error from '../ui/Error'
import {Link} from 'react-router-dom'
import styleBtn from '../ui/Button.module.css'


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
    <section className="container anime-left">
      <h1 className="title">Login</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
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
        { error && <Error>{error}</Error> }
      </form>
      <Link className={styles.forgot} to="/login/perdeu">Perdeu a senha?</Link>
      <div className={styles.cadastro}>
        <h2 className={styles.subtitle}>Cadastre-se</h2>
        <p>Ainda não possui conta? Cadastre-se no site.</p>
        <Link className={styleBtn.button} to="/login/cadastro">Cadastro</Link>
      </div>
    </section>
  )
}

export default LoginForm