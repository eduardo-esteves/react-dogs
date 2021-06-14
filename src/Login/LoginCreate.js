import React from 'react'
import Input from '../ui/Input'
import Button from '../ui/Button'
import useForm from '../hooks/useForm'
import { CREATE_USER } from '../api'
import { default as Erro } from '../ui/Error'
import PropTypes from 'prop-types'
import { UserContext } from '../UserContext'
import useFetch from '../hooks/useFetch'

const LoginCreate = () => {

  const userName    = useForm()
  const email       = useForm('email')
  const password    = useForm()
  
  const { userLogin, navigate } = React.useContext(UserContext)
  const { loading, error, request } = useFetch()
  

  async function handleSubmit(event){
    event.preventDefault()
    
    const { url, options } = CREATE_USER({
      email     : email.value,
      username  : userName.value,
      password  : password.value
    })
    
    const { response } = await request(url, options)
    if(response.status === 200){
      await userLogin(userName.value, password.value)
      if(error === null){
        navigate('/conta')
      }
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
        { loading ? <Button disabled>Cadastrando...</Button> : <Button>Cadastrar</Button> }
      </form>
      <Erro>{(error !== null) ? error : ''}</Erro>
    </section>
  )

}

LoginCreate.propTypes = {
  event : PropTypes.object
}

export default LoginCreate