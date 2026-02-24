import React, { useState } from 'react'
import { ReactComponent as Icon } from '../../assets/icons/emailicon.svg'
import { InputContainer, MailInput } from '../styles/FormStyles'


const Email = ({email}) => {

  const [ emailBool, setEmailBool ] = useState(false)

  return (
    <InputContainer  >
      <Icon style={{position: 'absolute', transition:'0.5s' ,transform:'translate(14px, 0px)'}} fill={emailBool ? 'black' : '#CCCFD9'} height='25px' width='25px'/>
      <MailInput bool={emailBool} placeholder='E-mail' onChange={(e) => {
        email(e.target.value)
        if(e.target.value.length > 0) {
          setEmailBool(true)
        } else {
          setEmailBool(false)
        }
      }} />
    </InputContainer>
    
  )
}

export default Email