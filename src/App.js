import React from 'react';
import './App.css';
import { Brand, CTA, Navbar } from './components';
import { Blog, Features, Footer, Header, Possibility, WhatGPT3 } from './container';

const App = () => {
  return (
    <div className='gpt3__app'>
        <div className='gpt3__app-gradient'>
          <Navbar/>
          <Header/>
        </div>
        <Brand/>
        <WhatGPT3/>
        <Features/>
        <Possibility/>
        <CTA/>
        <Blog/>
        <Footer/>
    </div>
  )
}

export default App