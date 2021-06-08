import React from 'react' 
import PropTypes from 'prop-types'

const Error = ({children}) => {
  
  if(!children) return null
  
  return (
    <p style={{color : '#f31', margin: '1rem 0'}}>{children}</p>
  )

}

Error.propTypes = {
  children : PropTypes.string.isRequired
}

export default Error