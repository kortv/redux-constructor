import React from 'react';
import dateConvert from './../events/dateConvert';
// import CompControls from './helpers/CompControls';

export default function Email({ content, handleClick }) {
  const date = dateConvert(content.created_at);
  const isFile = content.documents.length ? (<div className='attach'><svg>
    <use xmlnsXlink='http://www.w3.org/1999/xlink' xlinkHref='#attach'></use>
  </svg>
    <a href={content.documents[0].url}>
      {content.documents[0].name || 'Прикрепленный файл без имени'}</a>
  </div>) : '';
  return (
    <div className='com-item new'>
      <div className='com-icon white blue mail'>
        <svg>
          <use xmlnsXlink='http://www.w3.org/1999/xlink' xlinkHref='#mail'></use>
        </svg>
      </div>
      <div className='comm'>
        <div className='comm-title'>
          <img src='img/pic.png' alt='' />
          <div className='txt'>
            <b>{content.author_name}</b> отправил письмо кандидату
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
        <div className='comm-text'>{content.body}
          {isFile}
          <div className='attach answer'>
            <svg>
              <use xmlnsXlink='http://www.w3.org/1999/xlink' xlinkHref='#answer'></use>
            </svg>
            <a href=''>Ответить</a>
          </div>
        </div>
      </div>
    </div>
  );
}
