import React from 'react' 

const useFetch = () => {
  const [ data, setData ]       = React.useState(null)
  const [ error, setError ]     = React.useState(null)
  const [ loading, setLoading]  = React.useState(false)

  const request = React.useCallback(async (url, options) => {
    let response
    let json
    
    try{
      setError(null)
      setLoading(true)
      response = await fetch(url, options)
      json = await response.json()
     //  debugger eslint-disable-line no-debugger
      if( response.status !== 200 ){
        throw new Error(json.message)
      }
    }catch(e){
      json = null
      setError(e.message)
    }finally{
      setData(json)
      setLoading(false)
    }
    return {json, response}
  }, [])

  return {
    data, 
    loading, 
    error, 
    request
  }
}


export default useFetch