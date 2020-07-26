import React from 'react';
//import {navList,navbar} from './index.css';
import './resp.js';
//import { Link } from 'react-router-dom';
import styled from 'styled-components';
//import RightNav from './RightNav.js';
import Burger from './Burger.js';

const Nav=styled.nav `
  width: 100%;
  height: 75px;
  border-bottom: 0px solid #f1f1f1;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;

  
`



function Nav1() {

  return (
    <>
    <Nav style={{backgroundColor:"rgb(25, 25, 26)"}}>
      {/*  <nav className="h-nav-resp">*/}
      <header>
        {/* <ul className="nav-list v-class-resp">*/}
        
          <Burger/>
     
         {/*  <ul className="nav-list ">

              <li><h3 className="abc">E-Techsystem</h3></li>
              <li><Link to="/">Home</Link></li>
              <li><a href="#about">About</a></li>
              <li><a href="#services">Services</a></li>
              <li>
                <Link to="/Sales">Sales</Link></li>
              <li><a href="#contact">Contact Us</a></li>
              <li><a href="#Admin">Admin</a></li>
            </ul>
        */} 
        {/*     <div className="burger" onClick={bgChange}>
        
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div></div>
    */}

    
      </header>
      {/*   </nav>*/}
      </Nav>
    </>

  );
}

export default Nav1;
