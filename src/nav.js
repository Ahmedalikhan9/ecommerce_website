import React, { useState } from 'react'
import { FaTruckMoving } from 'react-icons/fa';
import { AiOutlineHeart } from 'react-icons/ai';
import { CiLogin } from 'react-icons/ci';
import { CiLogout } from 'react-icons/ci';
import { BsBagCheck } from 'react-icons/bs';
import { AiOutlineUser } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";
import './nav.css'

const Nav = ({searchbtn}) => {
  const [search, setsearch] = useState()
  const { loginWithRedirect, logout, user, isAuthenticated} = useAuth0();
  return (
    <>
  <div className='free'>
    
        <div className='icon'>
        <FaTruckMoving/>
    </div>

    <p>FREE shipping when shoping upto $1000 </p>
  </div>

  <div className='main-header'>
    <div className='container'>
        <div className='logo'>
            <img src='./img/logo.svg'alt='logo'></img>
        </div>
        <div className='search_box'>
            <input type='text' value={search} placeholder='Search Your Product...' autoComplete='off' onChange={(e) => setsearch(e.target.value)}></input>
            <button onClick={() => searchbtn (search)}>search</button>
        </div>
        <div className='icon'>
          {
        isAuthenticated && (
          <div className='account'>
                <div className='user_icon'>
                    <AiOutlineUser />
                </div>
                <p>Hello, {user.name}</p>
              </div>  
        )
        } 
            
            <div className='second_icon'>
                <Link to="/" className='Link'><AiOutlineHeart/></Link>
                <Link to="/cart" className='Link'><BsBagCheck /></Link>
            </div>
            
        </div>
    </div>
  </div>
  <div className='header'>
    <div className='container'>
      <div className='nav'>
        <ul>
        <li>
          <Link to='/' className='Link'>Home</Link>
        </li>
        <li>
          <Link to='/product' className='Link'>Product</Link>
        </li>
        <li>
          <Link to='/about' className='Link'>About</Link>
        </li>
        <li>
          <Link to='/contact' className='Link'>Contact</Link>
        </li>
      </ul>
      </div>
      <div className='auth'>
        {
          isAuthenticated ?
          <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}><CiLogout /></button>
          :
          <button onClick={() => loginWithRedirect()}><CiLogin /></button>
        }
        

      </div>
    </div>
  </div>
    </>
  )
}

export default Nav