import './App.css'
import Home from './pages/home/home'
import Login from './pages/login/login'
import Signup from './pages/signup/signup'
import { Navigate, Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import { useAuthContext } from './authContext/authContext'

function App() {
  const {authuser} = useAuthContext()
  return (
    <div className='p-4 h-screen flex items-center justify-center'>
      <Routes>
        <Route path='/' element={authuser ? <Home/> : <Navigate to={"/login"}/>} />
        <Route path='/login' element={authuser ? <Navigate to='/'/> : <Login/>}/>
        <Route path='/signup' element={authuser ? <Navigate to='/'/> : <Signup/>}/>
      </Routes>
      <Toaster/>
    </div>
  )
}

export default App;
