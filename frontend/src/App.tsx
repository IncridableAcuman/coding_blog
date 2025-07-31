import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Landing from './pages/Landing'
import Login from './pages/Login'
import ResetPassword from './pages/ResetPassword'
import AddBlog from './pages/AddBlog'
import BlogList from './pages/BlogList'
import Comments from './pages/Comments'
import Layout from './layout/Layout'
import Blogboard from './pages/Blogboard'
import { Toaster } from 'sonner'
const App = () => {
  return (
    <>
    <Toaster/>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/login' element={<Login />} />
      <Route path='/landing' element={<Landing />} />
      <Route path='/reset-password' element={<ResetPassword />}  />
      <Route path='/dashboard' element={<Layout/>} >
        <Route index element={<Blogboard/>} />
        <Route path='add' element={<AddBlog/>} />
        <Route path='list' element={<BlogList/>} />
        <Route path='comment' element={<Comments/>} />
      </Route>
    </Routes>
    </>
  )
}

export default App