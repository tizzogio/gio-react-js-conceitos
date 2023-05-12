import React from 'react'
import { Link } from 'react-router-dom'
import styles from './NavBar.module.css'

function NavBar() {
  return (
    <div>
        <ul className={styles.list}>
          <l className={styles.item}><Link to={"/"}>Home</Link></l>
          <li className={styles.item}><Link to={"/empresas"}>Empresa</Link></li>
          <li className={styles.item}><Link to={"/contatos"}>Contato</Link></li>
          <li className={styles.item}><Link to={"/exemplos"}>Exemplos</Link></li>
        </ul>

    </div>
  )
}

export default NavBar
