
import {Routes, Route} from 'react-router-dom'
import Home from './Home'
import PagDois from './PagDois'
import PagTres from './PagTres'




export default function Rotas(){
    return(
    
    <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/PaginaDois' element={<PagDois />}/>
        <Route path='/PaginaTres' element={<PagTres />}/>
        <Route path='*' element={<Home />}/>
    </Routes>
    
        )
}



