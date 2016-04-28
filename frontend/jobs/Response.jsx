import React from 'react';
import dateConvert from './../events/dateConvert';
// import CompControls from './helpers/CompControls';

export default function Response({ content }) {
  const date = dateConvert(content.created_at);
  return (
    <div className='com-item'>
      <div className='com-icon white blue mail'>
        <svg>
          <use xmlnsXlink='http://www.w3.org/1999/xlink' xlinkHref='#mail'></use>
        </svg>
      </div>
      <div className='comm'>
        <div className='comm-title'>
          <img src='img/pic.png' alt='' />
          <div className='txt'>
            <b>{content.applicant_name}</b> отправил отзыв
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
        <div className='comm-text'>{content.body}</div>
      </div>
    </div>
  );
}
