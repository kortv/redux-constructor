import React from 'react';
// import CompControls from './helpers/CompControls';

export default function Alert3(/* { content, handleClick } */) {
  return (
    <div className='alert'>
      <div className='alert-close'>
        <svg>
          <use xmlnsXlink='http://www.w3.org/1999/xlink' xlinkHref='#close' />
        </svg>
      </div>
      Собеседование на должность «Главный менеджер» Lorem ipsum dolor sit amet,
      consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.
    </div>
  );
}
