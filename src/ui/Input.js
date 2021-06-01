import React from 'react' 
import styles from './Input.module.css'

const Input = ({ label, type, id }) => {
  return(
    <div className={styles.wrapper}>
      <label 
        htmlFor={id}>
        {label}
      </label>
      <input
        type={type} 
        id ={id}
        className={styles.input} 
      />
      <p className={styles.error}>Error</p>
    </div>
  )
}

export default Input