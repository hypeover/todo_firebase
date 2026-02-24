import React, { useContext, useState } from 'react'
import { SwitchHyper, SwitchText, WrapperRight, InputsContainer, Alert, Name } from './styles/FormStyles'
import { FormContext } from './Form'
import Email from './Login/Email'
import Password from './Login/Password'
import Button from './Login/Button'
import { useNavigate } from 'react-router-dom'
import { UserAuth } from '../context/AuthContext'

const Login = () => {

  const Context = useContext(FormContext)
  const [ email, setEmail ] = useState('')
  const [ password, setPassword ] = useState('')
  const [ error, setError ] = useState('')
  const navigate = useNavigate()
  const { signIn } = UserAuth()
  const [ alertBool, setAlertBool ] = useState(false)
  
  const handleSubmit = async (e) => {
    //e.preventDefault();
    try {
      await signIn(email, password)
      navigate('/Home/Dashboard')
    } catch (e) {
      if(e.message === 'Firebase: Error (auth/invalid-email).'){
        setError('Invalid E-Mail')
      }
      if(e.message === 'Firebase: Error (auth/wrong-password).'){
        setError('Wrong password')
      }
      if(e.message === 'Firebase: Error (auth/internal-error).'){
        setError('Type your password')
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
    <WrapperRight bool={Context.switchBoolean} >
        <InputsContainer>
          <Name>mtodo</Name>
          <Email email={setEmail} />
          <Password onEnter={handleSubmit} password={setPassword} />
          <Button submit={handleSubmit} />
          <SwitchText>Not registered yet? <SwitchHyper onClick={Context.switchFunction}>Create an Account</SwitchHyper></SwitchText>
          <Alert bool={alertBool}>{error}</Alert>
        </InputsContainer>
    </WrapperRight>
  )
}

export default Login