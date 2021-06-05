import React from 'react' 


export const UserContext = React.createContext()

export const UserStorage = (props) => {
  return (
    <UserContext.Provider value={{usuario : 'Admin'}}>
      {props.children}
    </UserContext.Provider>
  )
}