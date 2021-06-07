import React from 'react' 
import styles from './Input.module.css'
import PropTypes from 'prop-types'

const Input = ({ label, type, id, value, onChange, error, onBlur }) => {
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
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
      {error && <p className={styles.error}>{error}</p>}
    </div>
  )
}

Input.defaultProps = {
  value     : '',
  error     : null
}

Input.propTypes = {
  label     : PropTypes.string.isRequired,
  type      : PropTypes.string.isRequired,
  id        : PropTypes.string,
  value     : PropTypes.string.isRequired,
  onChange  : PropTypes.func.isRequired,
  error     : PropTypes.string,
  onBlur    : PropTypes.func
}

export default Input