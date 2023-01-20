import React from 'react';
import './brand.css';
import { google, slack, atlassian, dropbox, shopify } from './index';

const Brand = () => {
  return (
    <div className='gpt3__brand section-padding'>
      <div className='gpt3__brand-images'>
        <div>
        <img src={google} alt="google" />
        </div>
        <div>
        <img src={slack} alt="slack" />
        </div>
        <div>
        <img src={atlassian} alt="atlassian" />
        </div>
        <div>
        <img src={dropbox} alt="dropbox" />
        </div>
        <div>
        <img src={shopify} alt="shopify" />
        </div>
      </div>
    </div>
  )
}

export default Brand