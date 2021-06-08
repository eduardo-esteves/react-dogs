import React from 'react' 
import styles from './Input.module.css'
import PropTypes from 'prop-types'
import Error from './Error'

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
      {error && <Error>{error}</Error>}
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