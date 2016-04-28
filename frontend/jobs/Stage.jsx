import React from 'react';
import dateConvert from './../events/dateConvert';
// import CompControls from './helpers/CompControls';

export default function Stage({ content }) {
  const date = dateConvert(content.created_at);
  return (
    <div className='com-item'>
      <div className='com-icon white light-green bell'>
        <svg>
          <use xmlnsXlink='http://www.w3.org/1999/xlink' xlinkHref='#bell'></use>
        </svg>
      </div>
      <div className='comm'>
        <div className='comm-title'>
          <img src='img/pic.png' alt='' />
          <div className='txt'>
            <b>{content.author_name}</b> перенес кандидата на <b>{content.body}</b>
            <div className='comm-time'>{date}</div>
          </div>
          <div className='comic'>
            <svg>
              <use xmlnsXlink='http://www.w3.org/1999/xlink' xlinkHref='#close'></use>
            </svg>
          </div>
          <div className='comic edit'>
            <svg>
              <use xmlnsXlink='http://www.w3.org/1999/xlink' xlinkHref='#pencil'></use>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
