import './App.css'
import Navbar from './components/Navbar'
import CreateStoryPage from './pages/CreateStoryPage'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import SignupPage from './pages/SignupPage'
import ViewStoryPage from './pages/ViewStoryPage'

function App() {

  return (
    <div className='w-full'>
      {/* <div className="h-[80px]"></div> */}
      <Navbar />
      <div className='w-full h-screen flex justify-center items-center'>
        <HomePage />
      </div>
    </div>
  )
}

export default App
