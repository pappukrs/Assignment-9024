import React from 'react'
import Style from './Navbar.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
console.log(Style)
const Navbar = () => {
  return (
    <div className={Style.Navbar}>
   <div className={Style.navletter}>CORKOWL</div>
   <div className={Style.navsearch}>
    <input type="text" className={Style.input} >
    
    </input>
   </div>
   <div className={Style.navnot}>NOT</div>
   <div className={Style.navname}>Nicholas D.</div>
   <div className={Style.navicon}>Icon</div>
   <div className={Style.navdown}>Down</div>
    </div>
  )
}

export default Navbar