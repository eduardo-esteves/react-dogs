import React from 'react' 


const useMediaQuery = (maxWidth) => {

  const [ match, setMatch ] = React.useState(null)

  React.useEffect( () => {
    function changeMatch(){
      const { matches } = window.matchMedia(maxWidth)
      setMatch(matches)
    }
    window.addEventListener('resize', changeMatch)
    changeMatch()
    return () => {
      window.removeEventListener('resize', changeMatch)
    }
  }, [maxWidth])

  return match
}


export default useMediaQuery