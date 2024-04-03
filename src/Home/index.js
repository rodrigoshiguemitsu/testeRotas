import {Link} from 'react-router-dom'
 import PagDois from '../PagDois'





function Home(){
    return(
        <div>

        <main>
        <h1>Sou a pagina Home</h1>
        <Link to={PagDois} >PaginaDois</Link>
        </main>
        
        </div>
        )
}

export default Home 