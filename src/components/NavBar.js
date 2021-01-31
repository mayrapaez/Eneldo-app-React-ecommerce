import React from 'react'
import './styles.css';

const NavBar = () => {
    return (
        <nav>
        <ul>
          <li>
            <h1>ENELDO Mercado Natural.</h1>
          </li>
          <li><a href="">Home </a></li>
          <li><a href="">Nostros</a></li>
          <li><a href="">Franquicias</a>
              <ul>
                <li><a href="">Capital Federal</a></li>
                <li><a href="">Buenos Aires</a></li>
                <li><a href="">Interior</a></li>
              </ul>
          </li>
          <li><a href="">Tienda</a></li>
        </ul>
      </nav>
    )
}

export default NavBar
