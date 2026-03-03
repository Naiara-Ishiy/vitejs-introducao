import {Routes, Route} from 'react-router-dom';

import Home from './pages/home';
import Sobre from './pages/sobre';

function App() {
/*Primeira rota é a que abre primeiro*/
  return (
    <Routes>
      <Route path='/' element={<Home/>}/> 
      <Route path='/sobre' element={<Sobre/>}/>
    </Routes>
  )
}

export default App