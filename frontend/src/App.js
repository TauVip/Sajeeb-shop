import { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import WebFont from 'webfontloader'
import './App.css'
import Home from './components/Home'
import ProductDetails from './components/Products/ProductDetails'

function App() {
  useEffect(() => {
    WebFont.load({ google: { families: ['Roboto', 'Droid Sans', 'Chilanka'] } })
  }, [])

  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/product/:id' element={<ProductDetails />} />
    </Routes>
  )
}
export default App
