// Email Group form /frontend/jobs/_groupActionBlock/G-Email.jsx
import React from 'react';

export default function GEmail({ applicants, groupSubmit }) {
  const groupNames = applicants && applicants.length ?
  applicants.map((obj, key) => (<div key={key} className='inv'>
    {obj.name}
  </div>)
  ) : (<div className='inv'>Выберите адресатов из колонки, слево.</div>);
  return (
    <div className='comment wind'>
      <div className='comment-title'>
        Написать сообщение кандидатам
        <div onClick={groupSubmit} data-type='close-group' className='close'>
          Закрыть и вернуться
          <svg>
            <use xmlnsXlink='http://www.w3.org/1999/xlink' xlinkHref='#close' />
          </svg>
        </div>
      </div>
      <form onSubmit={groupSubmit}>
        <p>Людям:</p>
        <div className='invite'>
          <div className='invite-list'>

          {groupNames}

          </div>
        </div>
        <div className='wind-des'>The candidates marked in gray dont have an email address
        so they will not receive this email. You can edit them and try again.</div>
        <div className='comform-item'>
          Шаблон сообщения
          <div className='pattern pattern-small tool-block'>
            <div className='pattern-block tool-btn'>
              <div className='icon'>
                <svg className='down'>
                  <use xmlnsXlink='http://www.w3.org/1999/xlink' xlinkHref='#down' />
                </svg>
                <svg className='up'>
                  <use xmlnsXlink='http://www.w3.org/1999/xlink' xlinkHref='#up' />
                </svg>
              </div>
              Выберите темплейт
            </div>
            <div className='tool'>
              <div className='tool-link'>Показать все</div>
              <div className='tool-link'>Встречи</div>
              <div className='tool-link'>Комментарии</div>
              <div className='tool-link'>Напоминания</div>
              <div className='tool-link'>Звонок</div>
            </div>
          </div>
          <div className='btn'>Сохранить</div>
        </div>
        <div className='comform-item'>Сообщение</div>
        <textarea name defaultValue={''} />
        <div className='comform-item'>
          Вложения
          <div className='attach-list'>
            <div className='upload'>
              <svg>
                <use xmlnsXlink='http://www.w3.org/1999/xlink' xlinkHref='#cloud' />
              </svg>
              <input type='file' />
            </div>
          </div>
        </div>
        <input type='submit' value='Отправить' className='btn' style={{ padding: '0 20px' }} />
      </form>
    </div>
  );
}
