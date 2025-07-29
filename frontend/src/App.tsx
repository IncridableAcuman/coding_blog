import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Landing from './pages/Landing'
import Login from './pages/Login'
import ResetPassword from './pages/ResetPassword'
import Dashboard from './pages/Dashboard'
import AddBlog from './pages/AddBlog'
import BlogList from './pages/BlogList'
import Comments from './pages/Comments'
const App = () => {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/login' element={<Login />} />
      <Route path='/landing' element={<Landing />} />
      <Route path='/reset-password' element={<ResetPassword />}  />
      <Route path='/dashboard' element={<Dashboard/>} />
      <Route path='/add' element={<AddBlog/>} />
      <Route path='/list' element={<BlogList/>} />
      <Route path='/comment' element={<Comments/>} />
    </Routes>
    </>
  )
}

export default App