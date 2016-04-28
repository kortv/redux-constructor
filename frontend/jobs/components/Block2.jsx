import React from 'react';
// import CompControls from './helpers/CompControls';

export default function Block2(/* { content, handleClick } */) {
  return (
    <div className='info-block block-plus'>
      <div className='plus-info'>
        Контактные данные
        <svg className='up'>
          <use xmlnsXlink='http://www.w3.org/1999/xlink' xlinkHref='#up' />
        </svg>
        <svg className='down'>
          <use xmlnsXlink='http://www.w3.org/1999/xlink' xlinkHref='#down' />
        </svg>
      </div>
      <div className='hide-block' style={{ display: 'none' }}>
        <div className='contacts'>
          <div className='con-item one'>
            <div className='con-link'>
              <div className='con-icon'>
                <svg>
                  <use xmlnsXlink='http://www.w3.org/1999/xlink' xlinkHref='#phone' />
                </svg>
              </div>
              +7 (910) 123 45 45
            </div>
            <div className='con-link'>
              <div className='con-icon'>
                <svg>
                  <use xmlnsXlink='http://www.w3.org/1999/xlink' xlinkHref='#mail' />
                </svg>
              </div>
              mail@gmail.com
            </div>
            <div className='con-link'>
              <div className='con-icon'>
                <svg>
                  <use xmlnsXlink='http://www.w3.org/1999/xlink' xlinkHref='#point' />
                </svg>
              </div>
              Москва
            </div>
            <div className='con-link'>
              <div className='con-icon'>
                <svg>
                  <use xmlnsXlink='http://www.w3.org/1999/xlink' xlinkHref='#skype' />
                </svg>
              </div>
              mail@gmail.com
            </div>
            <div className='con-link'>
              <div className='con-icon'>
                <svg>
                  <use xmlnsXlink='http://www.w3.org/1999/xlink' xlinkHref='#viber' />
                </svg>
              </div>
              mail@gmail.com
            </div>
          </div>
          <div className='con-item'>
            <div className='con-link'>
              <div className='con-icon in'>
                <svg>
                  <use xmlnsXlink='http://www.w3.org/1999/xlink' xlinkHref='#linkedin' />
                </svg>
              </div>
              <a href>link.com/linked...</a>
            </div>
            <div className='con-link'>
              <div className='con-icon fb'>
                <svg>
                  <use xmlnsXlink='http://www.w3.org/1999/xlink' xlinkHref='#fb' />
                </svg>
              </div>
              <a href>link.com/linked...</a>
            </div>
            <div className='con-link'>
              <div className='con-icon gh'>
                <svg>
                  <use xmlnsXlink='http://www.w3.org/1999/xlink' xlinkHref='#github' />
                </svg>
              </div>
              <a href>link.com/linked...</a>
            </div>
            <div className='con-link'>
              <div className='con-icon tw'>
                <svg>
                  <use xmlnsXlink='http://www.w3.org/1999/xlink' xlinkHref='#tw' />
                </svg>
              </div>
              <a href>link.com/linked...</a>
            </div>
          </div>
          <div className='con-item'>
            <div className='con-link'>
              <div className='con-icon'>
                <span>m</span>
              </div>
              <a href>link.com/linked...</a>
            </div>
            <div className='con-link'>
              <div className='con-icon vk'>
                <svg>
                  <use xmlnsXlink='http://www.w3.org/1999/xlink' xlinkHref='#vk' />
                </svg>
              </div>
              <a href>link.com/linked...</a>
            </div>
            <div className='con-link'>
              <div className='con-icon small'>
                <svg>
                  <use xmlnsXlink='http://www.w3.org/1999/xlink' xlinkHref='#right' />
                </svg>
              </div>
              <a href>link.com/linked...</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
