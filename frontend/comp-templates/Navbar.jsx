import React from 'react';
import CompControls from './helpers/CompControls';

export default function NavBar({ handleClick, content }) {
  const btns = content.content.map((obj, key) => (
    <li key={key}><a href={obj.link || '#'}>{obj.name || 'наименование'}</a></li>));
  return (
    <nav className='simple-bar' style={{ position: 'relative' }}>
      <CompControls handleClick={handleClick} />
      <div className='container'>
        <div className='row nav-menu'>
          <div className='columns text-left col-md-12'>
            <ul className='menu'>
              {btns}
            </ul>
          </div>
        </div>
        <div className='mobile-toggle'>
          <i className='icon icon_menu'></i>
        </div>
      </div>
    </nav>
  );
}
