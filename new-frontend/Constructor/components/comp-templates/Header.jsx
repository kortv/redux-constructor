import React from 'react';
import CompControls from './helpers/CompControls';

export default function Header({ handleClick, content }) {
  const btns = content.get('content') ? content.get('content').map((obj, key) => (
    <a href={obj.get('link') || '#'} key={key} className='btn btn-primary btn-white'>
      {obj.get('name') || 'Кнопка'}
    </a>)
  ) : '';
  const style = content.hasOwnProperty('bg') ? { background: `url(${content.bg})` } : {};
  return (
    <header className='page-header'>
      <CompControls handleClick={handleClick} />
      <div className='background-image-holder' style={style}></div>
      <div className='container'>
        <div className='row'>
          <div className='col-sm-12 text-center'>
            <h1 className='text-white space-bottom-medium'>{content.header}</h1>
            {btns}
          </div>
        </div>
      </div>
    </header>
  );
}
