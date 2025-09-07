// CSS
import "./NavBar.css"

import { Link } from "react-router"

const NavBar = () => {
  return (
    <nav>
      <img className="navImage" src="./Logotipo.png" alt="" />
        <Link className="nav-link" to="/"> <h4 className="title-nav"> Inicio  </h4> </Link>
        <Link className="nav-link" to="/services"><h4 className="title-nav"> Serviços  </h4> </Link> 
        <Link className="nav-link" to="/contact"> <h4 className="title-nav"> Contato  </h4> </Link> 
        <Link className="nav-link" to="/about"> <h4  className="title-nav"> Sobre </h4> </Link>
    </nav>
  )

}

export default NavBar
