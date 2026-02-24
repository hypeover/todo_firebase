import React from 'react'
import { IconsContainer, Logo, LogoutContainer, Wrapper } from './styled/HomeStyles';
import { useNavigate, Outlet, NavLink } from 'react-router-dom';
import { ReactComponent as LogoutIcon } from '../assets/icons/logout.svg'
import { UserAuth } from '../context/AuthContext'
import { ReactComponent as HomeIcon } from '../assets/icons/home.svg'
import { ReactComponent as ProjectsIcon } from '../assets/icons/folder.svg'
import './styled/link.css'


const Navbar = () => {

    const {logout} = UserAuth();
    const navigate = useNavigate()

    const handleLogout = async () => {
        try { 
          await logout()
          navigate('/')
          console.log('You are logged out')
        } catch (e) {
          console.log(e.message)
        }
      }

  return (
    <>
    <Wrapper>
        <Logo>m</Logo>
        <IconsContainer>
          <NavLink exact className={(navData) => (navData.isActive ? 'active' : 'icon')} to='/Home/Dashboard' ><HomeIcon style={{height: '30px', width: '30px'}} /></NavLink>
          <NavLink exact className={(navData) => (navData.isActive ? 'active' : 'icon')} to='/Home/Projects' ><ProjectsIcon style={{height: '30px', width: '30px', margin: '30px 0 0 0'}} /></NavLink>
        </IconsContainer>
        <LogoutContainer onClick={handleLogout} >
          <LogoutIcon style={{height: '25px', width: '25px'}} />
        </LogoutContainer>
    </Wrapper>
    <Outlet />
    </>
  )
}

export default Navbar