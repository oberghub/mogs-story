import './App.css'
import Navbar from './components/Navbar'
import LoginPage from './pages/LoginPage'
import SignupPage from './pages/SignupPage'

function App() {

  return (
    <div className='w-full'>
      <Navbar />
      <div className='w-full h-screen flex justify-center items-center'>
        <SignupPage />
      </div>
    </div>
  )
}

export default App
