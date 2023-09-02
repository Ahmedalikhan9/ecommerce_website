import React from 'react'
import { BiLogoFacebook } from 'react-icons/bi';
import { AiOutlineInstagram } from 'react-icons/ai';
import { AiOutlineTwitter } from 'react-icons/ai';
import { BiLogoYoutube } from 'react-icons/bi';
import './footer.css'

const Footer = () => {
  return (
    <>
    <div className='footer'>
        <div className='container'>
            <div className='about'>
                <div className='logo'>
                    <img src='./img/logo.svg' alt='logo'></img>
                </div>
                <div className='detail'>
                    <p>We are a team of Designers & Developers that create high quality WordPress.</p>
                    <div className='icon'>
                        <li><BiLogoFacebook /></li>
                        <li><AiOutlineInstagram /></li>
                        <li><AiOutlineTwitter /></li>
                        <li><BiLogoYoutube /></li>
                    </div>
                </div>
            </div>
            <div className='account'>
                <h3>My Account</h3>
                <ul>
                    <li>Account</li>
                    <li>Order</li>
                    <li>Cart</li>
                    <li>Shipping</li>
                    <li>Return</li>
                </ul>
            </div>
            <div className='page'>
                <h3>Pages</h3>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Terms & Conditions</li>
                </ul>
            </div>
        </div>
    </div>
    </>
  )
}

export default Footer