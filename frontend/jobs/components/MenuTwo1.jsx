import React from 'react';
// import CompControls from './helpers/CompControls';

export default function MenuTwo1({ handleClick }) {
  return (
    <div className='info-block menu-two'>
      <div className='udes'>
        <img src='img/pic.png' alt='' />
        <div className='user-name'>Prizov Alexandr</div>
        <div className='user-post'>Manager</div>
        <div className='user-time'>
          <div className='add-tag'>
            <span>+add tag</span>
            <form name action method='post'>
              <div className='hashtag'>#</div>
              <input name type='text' defaultValue />
            </form>
          </div>
          <div className='tags'>
            <div className='tag-link'>
              <a href>#классныйкандидат</a>
              <svg>
                <use xmlnsXlink='http://www.w3.org/1999/xlink' xlinkHref='#close' />
              </svg>
            </div>
            <div className='tag-link'>
              <a href>#superman</a>
              <svg>
                <use xmlnsXlink='http://www.w3.org/1999/xlink' xlinkHref='#close' />
              </svg>
            </div>
            <div className='tag-link'>
              <a href>#nogo</a>
              <svg>
                <use xmlnsXlink='http://www.w3.org/1999/xlink' xlinkHref='#close' />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className='right usin'>
        <a className='setting' onClick={handleClick} data-type='addCommentField'>
          <svg>
            <use xmlnsXlink='http://www.w3.org/1999/xlink' xlinkHref='#comment' />
          </svg>
        </a>
        <a onClick={handleClick} className='setting bell' data-type='addCommentField'>
          <svg>
            <use xmlnsXlink='http://www.w3.org/1999/xlink' xlinkHref='#bell' />
          </svg>
        </a>
        <a onClick={handleClick} className='setting' data-type='addCommentField'>
          <svg>
            <use xmlnsXlink='http://www.w3.org/1999/xlink' xlinkHref='#mail' />
          </svg>
        </a>
        <a onClick={handleClick} className='setting' data-type='addCommentField'>
          <svg>
            <use xmlnsXlink='http://www.w3.org/1999/xlink' xlinkHref='#flag' />
          </svg>
        </a>
        <a onClick={handleClick} data-type='addCommentField' className='setting delete'>
          <svg>
            <use xmlnsXlink='http://www.w3.org/1999/xlink' xlinkHref='#close' />
          </svg>
        </a>
        <div className='btn green tool-block'>
          <div className='tool-btn'>
            <svg className='double-right'>
              <use xmlnsXlink='http://www.w3.org/1999/xlink' xlinkHref='#double-right' />
            </svg>
            Второй этап
            <svg className='down'>
              <use xmlnsXlink='http://www.w3.org/1999/xlink' xlinkHref='#down' />
            </svg>
            <svg className='up'>
              <use xmlnsXlink='http://www.w3.org/1999/xlink' xlinkHref='#up' />
            </svg>
          </div>
          <div className='tool'>
            <a href className='tool-link'>Москва</a>
            <a href className='tool-link'>Москва</a>
            <a href className='tool-link'>Москва</a>
            <a href className='tool-link'>Москва</a>
          </div>
        </div>
        <a href className='copy'>
          <svg>
            <use xmlnsXlink='http://www.w3.org/1999/xlink' xlinkHref='#copy' />
          </svg>
        </a>
      </div>
    </div>
  );
}
