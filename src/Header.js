import React from 'react'
import styles from './Header.module.css'
import { Link } from 'react-router-dom'
import { ReactComponent as Dogs} from './assets/dogs.svg'
import { UserContext } from './UserContext'

const Header = () => {
  const {data} = React.useContext(UserContext)
  console.log('Header -> data context', data)
  return (
  <header className={styles.header}>
    <nav className={`container ${styles.nav}`}>
      <Link className={styles.logo} to="/" aria-label="Dogs - Home"><Dogs /></Link>
      { (data && data.username) ? (
        <Link className={styles.login} to="/conta"> {data.nome} </Link>
      ) : (
        <Link className="styles.login" to="/login"> Login / Criar </Link>
      )}
    </nav>
  </header>
  )
}


export default Header