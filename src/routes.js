
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Home from './Home'
import PagDois from './PagDois/pagDois'
import PagTres from './PagTres/pagTres'




export default function Rotas() {
    return (
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/PaginaDois' element={<PagDois />}/>
            <Route path='/PaginaTres' element={<PagTres />}/>
           
        </Routes>
        </BrowserRouter>
        
    )
}



