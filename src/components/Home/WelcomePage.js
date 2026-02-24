import React, { useState } from 'react'
import { WelcomePageStyle, WelcomeText, WelcomeInput } from './styled/HomeStyles'
import { UserAuth } from '../context/AuthContext'
import { updateProfile } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import { set, ref } from 'firebase/database'
import { db } from '../firebase-config'

const WelcomePage = () => {

  const [ name, setName ] = useState('')
  const { user } = UserAuth()
  const navigate = useNavigate()

  const user_uid = user.uid
  const user_name = name
  const user_email = user.email

  const addUserToApp = async () => {
    set(ref(db, '/users/' + user_uid), {
      user_id: user_uid,
      username: user_name,
      email: user_email,
    })
  }

  const register = async () => {
    try {
      await updateProfile(user, { displayName: name })
      navigate('/Home/Dashboard')
      console.log(user)
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <WelcomePageStyle>
      <WelcomeText>Welcome in To Do App, <br />what's your name?</WelcomeText>
      <WelcomeInput onKeyPress={(e) => {if(e.code === 'Enter'){
        register();
        addUserToApp()
      }}} onChange={(e) => setName(e.target.value)} placeholder='Type here your name' />
    </WelcomePageStyle>
  )
}

export default WelcomePage