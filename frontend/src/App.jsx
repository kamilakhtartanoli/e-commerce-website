import { Routes , Route } from 'react-router'
import './App.css'
import Signup from './pages/Signup.jsx'
import Home from './pages/Home.jsx'
import Login from './pages/Login.jsx'
import Productdetail from './pages/Productdetail.jsx'
import Cart from './pages/Cart.jsx'
import About from './pages/About.jsx'
import Products from './pages/Products.jsx'
import Man from './pages/Man.jsx'
import Women from './pages/Women.jsx'
import Contact from './pages/Contact.jsx'


function App() {

  return<>
  <Routes>
    <Route path='/' element={<Home />}/>
    <Route path='/about' element={<About />}/>
    <Route path='/products' element={<Products/>}/>
    <Route path='/man' element={<Man />}/>
    <Route path='/women' element={<Women />}/>
    <Route path='/signup' element={<Signup />}/>
    <Route path='/login' element={<Login />} />
    <Route path="/product/:id" element={<Productdetail/>} />
    <Route path='/contact' element={<Contact />}/>
    <Route path='/cart' element={<Cart/>} />
  </Routes>
  </>
}

export default App
