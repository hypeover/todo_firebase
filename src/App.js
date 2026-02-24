import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AuthContextProvider } from './components/context/AuthContext'
import Form from './components/Form/Form'
import Home from './components/Home/Home'
import ProtectedRoute from './components/Form/ProtectedRoute'
import WelcomePage from './components/Home/WelcomePage'

const App = () => {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <Routes>
          <Route path='/' element={<Form />} />
          <Route path='/Welcome' element={<ProtectedRoute><WelcomePage /></ProtectedRoute>} />
          <Route path='/Home/*' element={<ProtectedRoute><Home /></ProtectedRoute>} />
        </Routes>
      </AuthContextProvider>
    </BrowserRouter>
  )
}

export default App