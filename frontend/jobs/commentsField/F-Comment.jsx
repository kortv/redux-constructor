import React from 'react';

export default function ModalText({ handleSubmit }) {
  return (
    <div className='com-item'>
      <div className='com-icon'>
        <svg>
          <use xmlnsXlink='http://www.w3.org/1999/xlink' xlinkHref='#comment' />
        </svg>
      </div>
      <div className='comment'>
        <div className='comment-title'>
          Оставить комментарий
          <svg onClick={handleSubmit} data-type='close'>
            <use xmlnsXlink='http://www.w3.org/1999/xlink' xlinkHref='#close' />
          </svg>
        </div>
        <form onSubmit={handleSubmit}>
          <textarea defaultValue={''} />
          <div className='uploder'>
            Вложения
            <div className='upload'>
              <svg>
                <use xmlnsXlink='http://www.w3.org/1999/xlink' xlinkHref='#cloud' />
              </svg>
              <input type='file' />
            </div>
          </div>
          <input type='submit' value='Отправить' className='btn' style={{ padding: '0 20px' }} />
        </form>
      </div>
    </div>
  );
}
