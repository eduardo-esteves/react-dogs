import React from 'react' 

const types = {
  number: {
    regex: /^[0-9]+$/,
    error: 'Não é um número'
  },
  email: {
    regex: /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.?([a-z]+)?$/i,
    error: 'Preencha um email válido'
  },
  password: {
    regex: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/,
    error: 'A senha deve conter no mimino 8 caracteres 1 caracter maíusculo, 1 minúsculo e 1 digito.'
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