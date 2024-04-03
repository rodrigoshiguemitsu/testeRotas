
import { Routes, Route, HashRouter } from 'react-router-dom'
import Home from './Home'
import PagDois from './PagDois/pagDois'
import PagTres from './PagTres/pagTres'




export default function Rotas() {
    return (
        <HashRouter basename='/'>
        <Routes>
            <Route path='/' component={Home}/>
            <Route path='/PaginaDois' component={PagDois}/>
            <Route path='/PaginaTres' component={PagTres}/>
           
        </Routes>
        </HashRouter>
        
    )
}



