import { useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

//* Componenets
import Navbar from './components/common/Navbar'
import Home from './components/common/Home'

import Login from './components/auth/Login'
import SignUp from './components/auth/SignUp'
import SearchRecipe from './components/recipes/SearchRecipe'
import SingleRecipe from './components/recipes/SingleRecipe'
import RecipeNew from './components/recipes/RecipeNew'
import RecipeEdit from './components/recipes/RecipeEdit'
import ReviewNew from './components/reviews/ReviewNew'
import Profile from './components/helpers/Profile'
import UserProfile from './components/userProfile'
import Footer from './components/common/Footer'
import ProfileEdit from './components/profile/ProfileEdit'


function App() {

  return (

    <div className='site-wrapper'>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signUp' element={<SignUp />} />
          <Route path='/addRecipe' element={<RecipeNew />} />
          <Route path='/searchRecipe' element={<SearchRecipe />} />
          <Route exact path='/searchRecipe/:id' element={<SingleRecipe />} />
          <Route exact path='/searchRecipe/:id/edit'element={<RecipeEdit />} />
          <Route exact path='/searchRecipe/:id/review'element={<ReviewNew />} />
          <Route exact path='/profile'element={<Profile />} />
          <Route exact path='/profile/edit'element={<ProfileEdit />} />
          <Route exact path='/user/:id'element={<UserProfile />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )

}
export default App


