import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './component/Header'
import Home from './pages/Home'
import SearchBar from './component/SearchBar'
import Restaurantmenu from './pages/Restaurantmenu'
import Searchproduct from './pages/Searchproduct'
import { Provider } from 'react-redux'
import Appstore from './store/Appstore'
import Cart from './pages/Cart'

function App() {
  

  return (
  <>
  <Provider store={Appstore}>
  <BrowserRouter>
  <Header/>
  <Routes>
    <Route exact path='/' element={<Home/>}/>
    <Route exact path='/search' element={<SearchBar/>}/>
    <Route path='/restaurant/:resid' element={<Restaurantmenu/>}/>
     <Route path='/searchproduct/:term' element={<Searchproduct/>}/> 
     <Route exact path='/cart' element={<Cart/>}/> 
  </Routes>
  
  </BrowserRouter>
  </Provider>
  </>
  )
}

export default App
