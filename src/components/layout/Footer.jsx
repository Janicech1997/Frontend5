import React from 'react'
import Contactos from '../contactos/Contactos'
import classes from '../layout/Footer.module.css'


export default function Footer() {
  return (
    <div className={classes.footerfin}>
      <footer className="footer-section">
  <div className="container">
    <ul className="footer-menu">
      <li><a href="./inicio">Inicio</a></li>
      <li><a href="./productos">Productos</a></li>
      <li><a href="./contactos">Contactos</a></li>
    </ul>
    <p className="copyright">
      Copyright ©  <i className="fa fa-heart-o" aria-hidden={true} /> por <a href="https://www.instagram.com/hey.janiz/">Janice Chen</a>
    </p>
  </div>
</footer>
    </div>
  )
}
