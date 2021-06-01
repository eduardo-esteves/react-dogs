import styles from './Home.module.css'

export const Home = () => {
  return(
    <div className={`container ${styles.home}`}>
      <h1 className="container">Bem vindo ao projeto React Dogs</h1>
    </div>
  )
}