import React from 'react' 
import { TOKEN_POST, TOKEN_VALIDATE_POST, USER_GET } from './api'
import { useNavigate } from 'react-router-dom'
import PropTypes from 'prop-types'


export const UserContext = React.createContext()

export const UserStorage = (props) => {

  const [data, setData]         = React.useState(null)
  const [login, setLogin]       = React.useState(null)
  const [loading, setLoading]   = React.useState(false)
  const [error, setError]       = React.useState(null)
  const navigate                = useNavigate()

  
  async function getUser(token){
    const {url, options}  = USER_GET(token)
    const response        = await fetch(url, options)
    const json            = await response.json()
    setData(json)
    setLogin(true)
    console.log('UserContext -> dados usuário', json)
  }

  async function userLogin(username, password){
    const {url, options} = TOKEN_POST({username, password})
    try{
      setError(null)
      setLoading(true)
      const response  = await fetch(url, options)
      if(response.status !== 200){
        throw new Error('Login ou senha incorreto! ' + response.statusText)
      }
      const {token}   = await response.json() 
      window.localStorage.setItem('token', token)
      await getUser(token)
    }catch(e){
      console.error(e)
      setError(e.message)
      setLogin(false)
    }finally{
      setLoading(false)
    }
  }

  const userLogout = React.useCallback( async function (){
    setData(null)
    setError(null)
    setLoading(false)
    setLogin(false)
    window.localStorage.removeItem('token')
    navigate('/login')
  }, [navigate])

  React.useEffect( () => {
    async function autoLogin(){
      const token = window.localStorage.getItem('token')
      if(token){
        try{
          setError(null)
          setLogin(true)
          const {url, options} = TOKEN_VALIDATE_POST(token)
          const response = await fetch(url, options)
          if( !response.ok ){
            throw new Error('Token inválido')
          }
          //const json     = await response.json()
          //console.log(json)
          await getUser(token)
        }catch(e){
          //Inserindo neste ponto eu tenho a garantia que todos os estados serão resetados também.
          await userLogout()
          console.error(e)
        }finally{
          setLoading(false)
        }
      }else{
        setLogin(false)
      }
    }
    autoLogin()
  }, [userLogout])

  return (
    <UserContext.Provider value={{userLogin, userLogout, data, error, loading, login, navigate}}>
      {props.children}
    </UserContext.Provider>
  )
}

UserStorage.propTypes = {
  children : PropTypes.array.isRequired
}