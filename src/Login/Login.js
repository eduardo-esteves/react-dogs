import { Routes, Route } from 'react-router-dom'
import LoginForm from './LoginForm'
import LoginCreate from './LoginCreate'
import PasswordRecover from './PasswordRecover'
import PasswordReset from './PasswordReset'

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
  return(
    <div>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="criar" element={<LoginCreate />} /> {/* Exemplo /login/criar */}
        <Route path="recuperar-senha" element={<PasswordRecover />} />
        <Route path="resetar-senha" element={<PasswordReset />} />
      </Routes>
    </div>
  )
}


export default Login