import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './component/Header'
import Home from './pages/Home'
import SearchBar from './component/SearchBar'
import Restaurantmenu from './pages/Restaurantmenu'
import Searchproduct from './pages/Searchproduct'

function App() {
  

  return (
  <>
  <BrowserRouter>
  <Header/>
  <Routes>
    <Route exact path='/' element={<Home/>}/>
    <Route exact path='/search' element={<SearchBar/>}/>
    <Route path='/restaurant/:resid' element={<Restaurantmenu/>}/>
     <Route path='/searchproduct/:term' element={<Searchproduct/>}/>  
  </Routes>
  
  </BrowserRouter>
 
  
  </>
  )
}

export default App
