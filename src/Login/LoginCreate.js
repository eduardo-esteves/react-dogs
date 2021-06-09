import React from 'react'
import Input from '../ui/Input'
import Button from '../ui/Button'
import useForm from '../hooks/useForm'
import { CREATE_USER } from '../api'
import { default as Erro } from '../ui/Error'
import PropTypes from 'prop-types'
import { UserContext } from '../UserContext'

const LoginCreate = () => {

  const userName    = useForm()
  const email       = useForm('email')
  const password    = useForm()
  const { userLogin, login, navigate } = React.useContext(UserContext)

  const [message, setMessage] = React.useState('')

  async function handleSubmit(event){
    event.preventDefault()
    
    const { url, options } = CREATE_USER({
      email     : email.value,
      username  : userName.value,
      password  : password.value
    })

    try{
      const response = await fetch(url, options)
      if(response.status !== 200){
        throw new Error('Não foi possível inserir o novo usuário')
      }
      await response.json()
      debugger //eslint-disable-line no-debugger
      userLogin(userName.value, password.value)
      if(login === true){
        navigate('/conta')
      }
    }catch(e){
      setMessage(e.message)
    }
  }

  return(
    <section className="container animeLeft">
      <h1 className="title">Cadastre-se</h1>
      <form onSubmit={handleSubmit}>
        <Input 
          type="text"
          name="username"
          id="userName"
          label="Usuário"
          {...userName}
        />
        <Input 
          type="email"
          name="email"
          id="email"
          label="Email"
          {...email}
        />
        <Input 
          type="password"
          name="password"
          id="password"
          label="Password"
          {...password}
        />
        <Button>Cadastrar</Button>
      </form>
      <Erro>{message}</Erro>
    </section>
  )

}

LoginCreate.propTypes = {
  event : PropTypes.object
}

export default LoginCreate