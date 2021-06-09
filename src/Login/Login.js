import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import LoginForm from './LoginForm'
import LoginCreate from './LoginCreate'
import PasswordRecover from './PasswordRecover'
import PasswordReset from './PasswordReset'
import { UserContext } from '../UserContext'
import styles from './Login.module.css'

/**
 * Este é um componente que faz uso do Nested Routes
 * Ou seja rotas dentro de rotas também conhecido como
 * rotas aninhadas.
 * Para que isso seja possível é necessário dentro do componente
 * pai que está incluindo esse componente que é o APP.js
 * inserir um asteristico após a rota login
 * <Route path="/login/*" element={<Login />} />
 * perceba que o componente Login não retorna um elemento
 * de interface e sim cria outras rotas aninhadas renderizando
 * o componente LoginForm por padrão.
 */
const Login = () => {
  const {login} = React.useContext(UserContext)
  //debugger //eslint-disable-line no-debugger
  if(login) return (<Navigate to="/conta" />)
  return(
    <section className={styles.login}>
      <div className={styles.forms}>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="cadastro" element={<LoginCreate />} /> {/* Exemplo /login/cadastro */}
          <Route path="recuperar-senha" element={<PasswordRecover />} />
          <Route path="resetar-senha" element={<PasswordReset />} />
        </Routes>
      </div>
    </section>
  )
}


export default Login