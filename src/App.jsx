import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/navBar/Navbar'
import Man from './components/pages/man/Man'
import Shop from './components/pages/shop/Shop'
import Woman from './components/pages/woman/Woman'
import Kids from './components/pages/kids/Kids'

function App() {

  return (
    <>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Shop/>}></Route>
        <Route path='/man' element={<Man/>}></Route>
        <Route path='/woman' element={<Woman/>}></Route>
        <Route path='/kids' element={<Kids/>}></Route>
      </Routes>
    </>
  )
}

export default App
