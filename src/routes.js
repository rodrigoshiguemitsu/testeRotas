
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Home from './Home'
import PagDois from './PagDois/pagDois'
import PagTres from './PagTres/pagTres'




export default function Rotas() {
    return (
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='https://testerotas1.onrender.com/PaginaDois' element={<PagDois />}/>
            <Route path='https://testerotas1.onrender.com/PaginaTres' element={<PagTres />}/>
           
        </Routes>
        </BrowserRouter>
        
    )
}



