import React from 'react';
// import CompControls from './helpers/CompControls';

export default function Block4(props/* { content, handleClick } */) {
  return (
    <div className='info-block block-plus'>
      <div id='timelineMsgs' className='plus-info'>
        Последние действия
        <svg className='up'>
          <use xmlnsXlink='http://www.w3.org/1999/xlink' xlinkHref='#up' />
        </svg>
        <svg className='down'>
          <use xmlnsXlink='http://www.w3.org/1999/xlink' xlinkHref='#down' />
        </svg>
      </div>
      <div className='setting funnel tool-block'>
        <div className='tool-btn'>
          <svg>
            <use xmlnsXlink='http://www.w3.org/1999/xlink' xlinkHref='#funnel' />
          </svg>
        </div>
        <div className='tool'>
          <div onClick={ props.handleClick } data-type='filter' data-id='0' className='tool-link'>
          Показать все</div>
          <div onClick={ props.handleClick } data-type='filter' data-id='1' className='tool-link'>
          Встречи</div>
          <div onClick={ props.handleClick } data-type='filter' data-id='2' className='tool-link'>
          Комментарии</div>
          <div onClick={ props.handleClick } data-type='filter' data-id='3' className='tool-link'>
          Напоминания</div>
          <div onClick={ props.handleClick } data-type='filter' data-id='4' className='tool-link'>
          Email</div>
        </div>
      </div>
      <div className='hide-block'>
        {props.children}
      </div>
    </div>
  );
}
