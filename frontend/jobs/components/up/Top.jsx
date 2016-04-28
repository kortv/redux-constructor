import React from 'react';
// import CompControls from './helpers/CompControls';

export default function Reminder(/* { content, handleClick } */) {
  return (
    <div className='top'>
      <div className='container'>
        <a href className='logo'><b>Работа</b>ble</a>
        <div className='menu'>
          <a href className='menu-item current'>
            <svg>
              <use xmlnsXlink='http://www.w3.org/1999/xlink' xlinkHref='#three' />
            </svg>
            Вакансии
          </a>
          <a href className='menu-item'>
            <svg>
              <use xmlnsXlink='http://www.w3.org/1999/xlink' xlinkHref='#star' />
            </svg>
            Кандидаты <sup>3</sup>
          </a>
          <a href className='menu-item'>
            <svg>
              <use xmlnsXlink='http://www.w3.org/1999/xlink' xlinkHref='#graph' />
            </svg>
            Аналитика
          </a>
          <a href className='menu-item'>
            <svg>
              <use xmlnsXlink='http://www.w3.org/1999/xlink' xlinkHref='#clock' />
            </svg>
            События
          </a>
        </div>
        <form name='search' action method='post' className='search'>
          <div className='bell'>
            <svg>
              <use xmlnsXlink='http://www.w3.org/1999/xlink' xlinkHref='#bell' />
            </svg>
            <sup>3</sup>
          </div>
          <div className='input'>
            <svg>
              <use xmlnsXlink='http://www.w3.org/1999/xlink' xlinkHref='#zoom' />
            </svg>
            <input name type='text' placeholder='Поиск' />
          </div>
          <div className='pro tool-block'>
            <div className='tool-btn'>
              <svg className='up'>
                <use xmlnsXlink='http://www.w3.org/1999/xlink' xlinkHref='#up' />
              </svg>
              <svg className='down'>
                <use xmlnsXlink='http://www.w3.org/1999/xlink' xlinkHref='#down' />
              </svg>
            </div>
            <img src='img/pic.png' alt='Илья Муромец' />
            <div className='tool'>
              <div className='pro-title'>
                <img src='img/pic.png' alt='Илья Муромец' />
                Компания
                <div className='close'>
                  <svg>
                    <use xmlnsXlink='http://www.w3.org/1999/xlink' xlinkHref='#close' />
                  </svg>
                </div>
              </div>
              <a href className='dr-link'>
                <svg>
                  <use xmlnsXlink='http://www.w3.org/1999/xlink' xlinkHref='#pc' />
                </svg>
                Профиль компании
              </a>
              <a href className='dr-link'>
                <svg>
                  <use xmlnsXlink='http://www.w3.org/1999/xlink' xlinkHref='#pc' />
                </svg>
                Настройки компании
              </a>
              <a href className='dr-link'>
                <svg>
                  <use xmlnsXlink='http://www.w3.org/1999/xlink' xlinkHref='#pc' />
                </svg>
                Аккаунты
              </a>
              <a href className='dr-link'>
                <svg>
                  <use xmlnsXlink='http://www.w3.org/1999/xlink' xlinkHref='#pc' />
                </svg>
                Подписка
              </a>
              <a href className='dr-link'>
                <svg>
                  <use xmlnsXlink='http://www.w3.org/1999/xlink' xlinkHref='#pc' />
                </svg>
                Интеграции
              </a>
              <a href className='dr-link'>
                <svg>
                  <use xmlnsXlink='http://www.w3.org/1999/xlink' xlinkHref='#pc' />
                </svg>
                Профиль
              </a>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
