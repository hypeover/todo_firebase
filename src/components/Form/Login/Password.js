import React, { useState } from 'react'
import { InputContainer, PasswordInput } from '../styles/FormStyles'
import { ReactComponent as Pass } from '../../assets/icons/pass.svg'
import { ReactComponent as Passw } from '../../assets/icons/passw.svg'
import { ReactComponent as Nopassw } from '../../assets/icons/nopassw.svg'



const Password = ({password, onEnter}) => {

    const [ type, setType ] = useState(false)
    const [ passwordBool, setPasswordBool ] = useState(false)

    const styles = {
        icon: {
            fill: passwordBool ? 'black' : '#CCCFD9',
            zIndex: '50', 
            height: '25px', 
            width: '25px',
            position: 'absolute', 
            transform: 'translate(-40px, -4px)',
            transition: '0.5s',
            cursor: 'pointer',
        }
    }

  return (
    <InputContainer>
        <Pass fill={passwordBool ? 'black' : '#CCCFD9'} style={{position: 'absolute', transition:'0.5s' ,transform:'translate(14px, 7px)'}}  height='25px' width='25px' />
        <PasswordInput bool={passwordBool} onKeyPress={(e) => {if(e.key === 'Enter'){
            onEnter()
        }}} onChange={(e) => {
            password(e.target.value)
            if(e.target.value.length > 0) {
                setPasswordBool(true)
            } else {
                setPasswordBool(false)
            }
        }} placeholder='Password' type={type ? 'text' : 'password'} />
        <div onClick={() => setType(!type)} > {type ? <Passw style={styles.icon} /> : <Nopassw style={styles.icon} />} </div>
    </InputContainer>
  )
}

export default Password



