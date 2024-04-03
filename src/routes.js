
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Home from './Home'
import PagDois from '../src/PagDois/pagDois'
import PagTres from '../src/PagTres/pagTres'




export default function Rotas() {
    return (
        <BrowserRouter>
        <Routes>
            <Route exact path='/' element={< Home />}/>
            <Route path='/PaginaDois' element={ <PagDois />}/>
            <Route path='/PaginaTres' element={ <PagTres />}/>
           
        </Routes>
        </BrowserRouter>
        
    )
}



