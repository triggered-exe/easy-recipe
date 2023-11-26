import React, { Fragment } from "react";
import Footer from "../Footer/Footer";
import styles from "./Navbar.module.css";
import logo from "../../easyrecipe-logo.png";
import { Link, Outlet } from "react-router-dom";
import {useNavigate} from 'react-router-dom';

function Navbar(){
  const navigate = useNavigate();
    return(
      <Fragment>
         <div className={styles.navbar}>
          <div className={styles.logoContainer }>
           <img src={logo} alt="Logo"  onClick={()=>{ navigate('/home');}}/>
          </div>
          
        </div>

        <Outlet />

        <Footer />

      </Fragment>


    )
}

export default Navbar;