import React from 'react';
// import CompControls from './helpers/CompControls';

export default function Block5(/* { content, handleClick } */) {
  return (
    <div className='info-block block-plus'>
      <div className='plus-info'>
        Профиль кандидата
        <svg className='up'>
          <use xmlnsXlink='http://www.w3.org/1999/xlink' xlinkHref='#up' />
        </svg>
        <svg className='down'>
          <use xmlnsXlink='http://www.w3.org/1999/xlink' xlinkHref='#down' />
        </svg>
      </div>
      <div className='setting'>
        <div className='button copy'>
          <svg>
            <use xmlnsXlink='http://www.w3.org/1999/xlink' xlinkHref='#copy' />
          </svg>
        </div>
      </div>
      <div className='setting'>
        <div className='button'>
          <svg>
            <use xmlnsXlink='http://www.w3.org/1999/xlink' xlinkHref='#print' />
          </svg>
        </div>
      </div>
      <div className='setting'>
        <div className='button'>
          <svg>
            <use xmlnsXlink='http://www.w3.org/1999/xlink' xlinkHref='#download' />
          </svg>
        </div>
      </div>
      <div className='hide-block'>
        <div className='paginal'>
          <div className='prev'>
            <svg>
              <use xmlnsXlink='http://www.w3.org/1999/xlink' xlinkHref='#up' />
            </svg>
          </div>
          <div className='next'>
            <svg>
              <use xmlnsXlink='http://www.w3.org/1999/xlink' xlinkHref='#down' />
            </svg>
          </div>
          <form name action method='get'>
            Страница <input name type='text' defaultValue={1} /> / 1
          </form>
        </div>
        <div className='block-pdf'>
          <img src='img/pic.png' alt='' />
        </div>
      </div>
    </div>
  );
}
