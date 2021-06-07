import React from 'react' 
import styles from './Button.module.css'
import PropTypes from 'prop-types'

const Button = ({ children, ...props }) => {
  return(
    <button className={styles.button} {...props}>{children}</button>
  )
}

Button.propTypes = {
  children : PropTypes.string.isRequired
}

export default Button