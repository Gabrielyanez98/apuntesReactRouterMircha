import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const MenuConceptos = () => {
    return (
        <nav>
            <ol>
                <li>
                    <span>Enlaces html (no recomendado)</span>
                    <a href="/">Home</a>
                    <a href="/acerca">Acerca</a>
                    <a href="/contacto">Contacto</a>
                </li>
                <li>
                    <span>Componente Link:</span>
                    <Link to="/">Home</Link>
                    <Link to="/acerca">Acerca</Link>
                    <Link to="/contacto">Contacto</Link>
                    <Link to="/no-existe">Error 404</Link>
                </li>
                <li>
                    <span>Componente navLink: </span>
                    <NavLink exact to="/" activeClassName="active">Home</NavLink>
                    <NavLink exact to="/acerca" activeClassName="active">Acerca</NavLink>
                    <NavLink exact to="/contacto" activeClassName="active">Contacto</NavLink>
                    <NavLink exacto to="/no-existe" activeClassName="active">Error 404</NavLink>
                    
                </li>

                <li>
                    <span>Parámetros:</span>
                    <Link to="/usuario/jonmircha">jonmircha</Link>
                    <Link to="/usuario/kenai">kenai</Link>
                </li>
                <li>
                    <span>Parámetros de consulta:</span>
                    <Link to="/productos">productos</Link>
                </li>
                <li>
                    <span>Redirecciones</span>
                    <Link to="/about">About</Link>
                    <Link to="/contact">Contact</Link>
                </li>
                <li>
                    <span>Rutas anidadas:</span>
                    <Link to="/react">React</Link>
                </li>
            </ol>

        </nav>
    )
}

export default MenuConceptos
