import React, { useState, useContext } from 'react'
import { Alert, SwitchHyper, SwitchText, WrapperLeft, InputsContainer, Name } from './styles/FormStyles'
import Email from './Register/Email'
import Password from './Register/Password'
import Button from './Register/Button'
import { UserAuth } from '../context/AuthContext'
import { FormContext  } from './Form'
import { useNavigate } from 'react-router-dom'

const Register = () => {

  const [ email, setEmail ] = useState('')
  const [ password, setPassword ] = useState('')
  const [ error, setError ] = useState('')
  const { createUser } = UserAuth()
  const Context = useContext(FormContext)
  const navigate = useNavigate()
  const [ alertBool, setAlertBool ] = useState(false)

  const handleSubmit = async (e) => {
    //e.preventDefault()
    try {
      await createUser(email, password)
      navigate('/Welcome')
    } catch (e) {
      console.log(e.message)
      if(e.message === 'Firebase: Error (auth/invalid-email).'){
        setError('Invalid E-Mail')
      }
      if(e.message === 'Firebase: Error (auth/internal-error).'){
        setError('Type your password')
      }
      if(e.message === 'Firebase: Error (auth/email-already-in-use).'){
        setError('E-Mail is already used')
      }
      if(e.message === 'Firebase: Password should be at least 6 characters (auth/weak-password).'){
        setError('Password should be at least 6 characters')
      }
      showAlert()
    }
  }

  const showAlert = () => {
    setAlertBool(true)
    setTimeout(() => {
      setAlertBool(false)
    }, 3000);
  }

  return (
    <WrapperLeft bool={Context.switchBoolean} >
        <InputsContainer>
          <Name>mtodo</Name>
          <Email email={setEmail} />
          <Password onEnter={handleSubmit} password={setPassword} />
          <Button submit={handleSubmit} />
          <SwitchText>Already have an Account?<SwitchHyper onClick={Context.switchFunction} >Sign in</SwitchHyper></SwitchText>
          <Alert bool={alertBool}>{error}</Alert>
        </InputsContainer>
    </WrapperLeft>
  )
}

export default Register