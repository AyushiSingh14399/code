import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import './Home';

const Ul=styled.ul`
list-style:none;
    display:flex;
    
    flex-flow:row nowrap;
  li{
    padding:18px 10px;
  }

  @media(max-width: 866px){
    flex-flow: column nowrap;
    background-color: gray;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    z-index: 10;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;

      li{
          color: #fff;
      }
  }
`;


const RightNav = ({ open }) => {
    return (
        <Ul open ={open} className="nav-list ">
     
              <li><h3 className="abc">E-Techsystem</h3></li>
              <li><Link to="/">Home</Link></li>
              <li><a href="#about">About</a></li>
              <li><a href="#services1">Services</a></li>
              <li>
                <Link to="/Sales">Sales</Link></li>
              <li><a href="#contact1">Contact Us</a></li>
             
            </Ul>
    )
}
export default RightNav