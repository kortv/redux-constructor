import React from 'react';

export default function CompControls({ handleClick }) {
  return (
    <div style={{ position: 'absolute', zIndex: 99, right: '3%', top: '20px' }}>
      <a onClick={handleClick} data-type='edit'>
        <span className='glyphicon glyphicon-pencil' aria-hidden='true'>
        </span>
      </a><span> </span>
      <a onClick={handleClick} data-type='pullUp'>
        <span className='glyphicon glyphicon-triangle-top' aria-hidden='true'>
        </span>
      </a><span> </span>
      <a onClick={handleClick} data-type='pullDown'>
        <span className='glyphicon glyphicon-triangle-bottom' aria-hidden='true'>
        </span>
      </a><span> </span>
      <a onClick={handleClick} data-type='del'>
        <span className='glyphicon glyphicon-remove' aria-hidden='true'>
        </span>
      </a>
    </div>
  );
}
