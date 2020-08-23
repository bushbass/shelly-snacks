import React from 'react';
import { Link } from 'react-router-dom';
import shoppingCartContext from '../shoppingCartContext';

function HeaderCartLink() {
  return (
    <shoppingCartContext.Consumer>
      {({ cart }) => (
        <div className='header-cart'>
          <Link to='/cart'>
            <span>{cart.length}</span>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              stroke-width='2'
              stroke-linecap='round'
              stroke-linejoin='round'
              className='feather feather-shopping-cart'
            >
              <circle cx='9' cy='21' r='1' />
              <circle cx='20' cy='21' r='1' />
              <path d='M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6' />
            </svg>
          </Link>
        </div>
      )}
    </shoppingCartContext.Consumer>
  );
}

export default HeaderCartLink;
