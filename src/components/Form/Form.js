import React, { useState } from 'react'
import { MainPage } from './styles/FormStyles'
import Login from './Login'
import Register from './Register'
import Card from './Card'

export const FormContext = React.createContext({})

const Form = () => {

  const [ cardBoolean, setCardBoolean ] = useState(false)

  const switchCard = () => {
    setCardBoolean(!cardBoolean)
  }

  return (
    <MainPage>
      <FormContext.Provider value={{
        switchFunction: switchCard,
        switchBoolean: cardBoolean,
      }}>
        <Card />
        <Register />
        <Login />
      </FormContext.Provider>
    </MainPage>
  )
}

export default Form