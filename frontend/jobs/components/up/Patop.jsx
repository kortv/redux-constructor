import React from 'react';
// import CompControls from './helpers/CompControls';

export default function Patop(/* { content, handleClick } */) {
  return (
    <div className='patop'>
      <div className='title'>
        Менеджер по развитию (Другая вакансия)
        <div className='tool-post tool-block'>
          <div className='tool-btn'>
            <svg className='up'>
              <use xmlnsXlink='http://www.w3.org/1999/xlink' xlinkHref='#up' />
            </svg>
            <svg className='down'>
              <use xmlnsXlink='http://www.w3.org/1999/xlink' xlinkHref='#down' />
            </svg>
          </div>
          <div className='tool'>
            <a href className='tool-link'>
              Менеджер по развитию
              <p>IT - Москва</p>
            </a>
            <a href className='tool-link'>
              Менеджер по развитию
              <p>IT - Москва</p>
            </a>
          </div>
        </div>
      </div>
      <div className='right'>
        <div className='add tool-block scrollinit'>
          <div className='tool-btn'>Добавить кандидата</div>
          <div className='tool add-cand'>
            <div className='add-title'>Добавить кандидата</div>
            <div className='add-item'>
              Получили резюме?
              <div className='upload'>
                <svg>
                  <use xmlnsXlink='http://www.w3.org/1999/xlink' xlinkHref='#cloud' />
                </svg>
                Загрузите его!
              </div>
            </div>
            <form name='add' action method='post' className='add-form'>
              <div className='or'><span>или</span></div>
              <div className='antiscroll-wrap scroll-add'>
                <div className='antiscroll-inner scroll-add'>
                  <div className='add-title'>Введите детали о кандидате</div>
                  <div className='add-item'><div className='label'>Имя</div><input name type='text' placeholder='Иван' /></div>
                  <div className='add-item'><div className='label'>Фамилия</div><input name type='text' placeholder='Иванов' /></div>
                  <div className='add-item'><div className='label'>Подпись</div><input name type='text' placeholder='Иван' /></div>
                  <div className='add-item'><div className='label'>E-mail</div><input name type='text' placeholder='mail@gmail.com' /></div>
                  <div className='add-item'><div className='label'>Телефон</div><input name type='text' placeholder='+7 (___) ___-__-__' /></div>
                  <div className='add-item'><div className='label addcom'>Коммент</div><textarea name defaultValue={''} /></div>
                  <div className='btn'>Добавить кандидата</div>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className='setting tool-block'>
          <div className='tool-btn'>
            <svg>
              <use xmlnsXlink='http://www.w3.org/1999/xlink' xlinkHref='#setting' />
            </svg>
          </div>
          <div className='tool toolong'>
            <div className='dr-link'>Редактировать вакансию</div>
            <div className='dr-link'>Ключевые слова</div>
          </div>
        </div>
      </div>
    </div>
  );
}
