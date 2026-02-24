import React from 'react'
import { Btn } from '../styles/FormStyles'

const Button = ({submit}) => {
  return (
    <Btn onClick={submit}>
      Sign Up
    </Btn>
  )
}

export default Button