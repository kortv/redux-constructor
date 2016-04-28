import React from 'react';
import dateConvert from './../events/dateConvert';
import getDateRange from './events/getDateRange-jobs';
// import CompControls from './helpers/CompControls';

export default function Schedule({ content, handleClick }) {
  const date = dateConvert(content.created_at);
  const dateRange = getDateRange(content.from, content.to);
  return (
    <div className='com-item'>
      <div className='com-icon white yellow bell'>
        <svg>
          <use xmlnsXlink='http://www.w3.org/1999/xlink' xlinkHref='#bell'></use>
        </svg>
      </div>
      <div className='comm'>
        <div className='comm-title'>
          <img src='img/pic.png' alt='' />
          <div className='txt'>
            <b>{content.author_name}</b> Назначил встречу с кандидатом
            <div className='comm-time'>{date}</div>
          </div>
          <div onClick={handleClick} data-type='del' data-id={content.id} className='comic'>
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
        <div className='comm-txt'>
          <div className='event'>
            <div className='event-item one'>
              <p>Когда:</p>
              {dateRange}
            </div>
          </div>
          <p>Тема:</p>{content.body}
        </div>
      </div>
    </div>
  );
}
