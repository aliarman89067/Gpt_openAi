import React,{ useState } from 'react'
import './navbar.css'
import logo from '../../assets/logo.svg';
import {RiMenu3Line, RiCloseLine} from 'react-icons/ri';

const Navbar = () => {
  const Menu = () => {
    return (
    <>
    <p><a href="#home">Home</a></p>
    <p><a href="#wgpt3">What is GPT3</a></p>
    <p><a href="#possibility">Open Ai</a></p>
    <p><a href="#features">Case Studies</a></p>
    <p><a href="#blog">Library</a></p>
    </>
    )
  }
const [toggleButton, settoggleButton] = useState(false)
  return (
   <div className='gpt3__navbar section-padding'>
      <div className='gpt3__navbar-links'>
        <div className='gpt3__navbar-logo'>
          <img src={logo} alt="Logo" />
        </div>
        <div className='gpt3__navbar-links_container'>
          <Menu />
        </div>
      </div>
      <div className='gpt3__navbar-sign'>
        <p>Sign in</p>
        <button type='button'>Sign up</button>
      </div>
      <div className='gpt3__navbar-menu'>
        {toggleButton ? <RiCloseLine color='#fff' size={27} onClick={()=> settoggleButton(false)}/> : <RiMenu3Line color='#fff' size={27} onClick={()=> settoggleButton(true)}/>}
        {toggleButton && (
          <div className='gpt3__navbar-menu_container'>
            <div className='gpt3__navbar-menu_links-container'>
            <Menu />
            <div className='gpt3__navbar-menu_sign'>
            <p>Sign in</p>
            <button type='button'>Sign up</button>
          </div>
            </div>
          </div>
        )}
      </div>
   </div>
  )
}

export default Navbar