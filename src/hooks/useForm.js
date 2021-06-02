import React from 'react' 

const types = {
  email: {
    regex: /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.?([a-z]+)?$/i,
    error: 'Preencha um email válido'
  }
}
// type virá como uma string por isso da necessidade de types[type] ao invés de types.type
const useForm = (type) => {
  const [value, setValue] = React.useState('')
  const [error, setError] = React.useState(null)
  
  function validate(value){
    if(type === false) return true
    if(value.length === 0){
      setError('Preencha um valor')
      return false
    }else if( types[type] && !types[type].regex.test(value) ){
      setError(types[type].error)
      return false
    }else{
      setError(null)
      return true
    }
  }

  function onChange({target}){
    if(error) validate(target.value)
    setValue(target.value)
  }
  return {
    value, 
    setValue,
    onChange,
    error,
    validate:   () => validate(value),
    onBlur:     () => validate(value)
  }
}

export default useForm