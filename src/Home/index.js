import {Link} from 'react-router-dom'






function Home(){
    return(
        <div>

        <main>
        <h1>Sou a pagina Home</h1>
        <Link to='/PaginaDois' target='_blanck'>PaginaDois</Link>
        </main>
        
        </div>
        )
}

export default Home 