import './App.css'
import Navbar from './components/Navbar'
import Contacts from './pages/Contacts'
import Home from './pages/Home'
import LoginForm from './pages/LoginForm'
import ClubRegistrationForm from './pages/ClubRegistrationForm'
import { Routes, Route, BrowserRouter } from 'react-router-dom'

function App() {

  return (
    <>
      <Navbar/>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<ClubRegistrationForm/>} />
        <Route path="/contacts" element={<Contacts/>} />
        <Route path="/login" element={<LoginForm/>} />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
