import React from 'react'
import '../css/styleHeaderFooterNav.css'
import foto from '../img/Foto.jpeg'

const Header = () => {
    return (

        <header>
            <div class="contenedorTitulo">
                <div class="titulo">
                    <figure>
                        <img src= {foto}  alt="Foto" />
                    </figure>
                    <h1>Agostino Colombres Juan Manuel</h1>
                </div>
            </div>
            <div class="navegacion">
                <nav id="navbar">
                    <div class="container">
                        <ul>
                            <li><a href="#sobreMi">Sobre mi</a></li>
                            <li><a href="#contacto">Contacto</a></li>
                        </ul>
                    </div>
                </nav>
            </div>

        </header>

    )
}

export default Header