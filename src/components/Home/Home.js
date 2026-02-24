import React from 'react'
//import { UserAuth } from '../context/AuthContext'
import { MainPage } from './styled/HomeStyles';
//import { useNavigate } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './Dashboard/Dashboard'
import Projects from './Projects/Projects'
import Navbar from './Navbar';

const Home = () => {

  

  

  return (
    <MainPage>
      <Routes>
        <Route path='/' element={<Navbar />} >
          <Route path='/Dashboard' element={<Dashboard />} />
          <Route path='/Projects' element={<Projects />} />
        </Route>
      </Routes>
    </MainPage>
  )
}

export default Home


//const {user, logout} = UserAuth();
//const navigate = useNavigate()

// <NameText>{user && user.displayName}</NameText> 

// const handleLogout = async () => {
//   try { 
//     await logout()
//     navigate('/')
//     console.log('You are logged out')
//   } catch (e) {
//     console.log(e.message)
//   }
// }