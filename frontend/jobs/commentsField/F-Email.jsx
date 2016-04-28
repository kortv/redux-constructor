import React from 'react';

export default function Email({ handleSubmit }) {
  return (
    <div className='com-item'>
      <div className='com-icon'>
        <svg>
          <use xmlnsXlink='http://www.w3.org/1999/xlink' xlinkHref='#comment' />
        </svg>
      </div>
      <div className='comment'>
        <div className='comment-title'>
          Написать сообщение кандидату
          <svg onClick={handleSubmit} data-type='close'>
            <use xmlnsXlink='http://www.w3.org/1999/xlink' xlinkHref='#close' />
          </svg>
        </div>
        <form onSubmit={handleSubmit}>
          <div className='comform-item'>Сообщение: <span className='inv'>
            <img src='img/pic.png' alt='' />
            Иванов Иван (ivanov@mail.ru)
          </span>
          </div>
          <div className='comform-item'>Шаблон письма</div>
          <div className='pattern tool-block'>
            <div className='icon tool-btn'>
              <svg className='down'>
                <use xmlnsXlink='http://www.w3.org/1999/xlink' xlinkHref='#down' />
              </svg>
              <svg className='up'>
                <use xmlnsXlink='http://www.w3.org/1999/xlink' xlinkHref='#up' />
              </svg>
            </div>
            Выберите шаблон письма
            <div className='tool'>
              <div className='tool-link'>Показать все</div>
              <div className='tool-link'>Встречи</div>
              <div className='tool-link'>Комментарии</div>
              <div className='tool-link'>Напоминания</div>
              <div className='tool-link'>Звонок</div>
            </div>
          </div>
          <div className='save-pattern'>Сохранить шаблон</div>
          <div className='comform-item'>
            Тема встречи
            <textarea defaultValue={''} />
          </div>
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
