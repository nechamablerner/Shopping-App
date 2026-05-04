import './App.css'
import { Route, Routes } from 'react-router-dom'
import { HomePage } from './Pages/HomePage';
import { ProductPage} from './Pages/ProductPage';
function App() {  
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/products/:id" element={<ProductPage/>}/>
      </Routes>
    </>
  )
}

export default App
