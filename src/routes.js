import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Home'
import PagDois from './PagDois'
import PagTres from './PagTres'




function Rotas(){
    return(

        <BrowserRouter>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/PaginaDois' element={<PagDois/>}/>
        <Route path='/PaginaTres' element={<PagTres/>}/>
    </Routes>
    </BrowserRouter>
        )
}
export default Rotas