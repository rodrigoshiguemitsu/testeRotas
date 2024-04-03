import { Outlet } from "react-router-dom"






function Home(){
    return(
        <div>

        <main>
        <h1>Sou a pagina Home</h1>
        </main>
        <Outlet/>
        </div>
        )
}

export default Home 