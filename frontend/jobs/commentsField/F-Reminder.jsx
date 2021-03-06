import React from 'react';
import DatePick from './../../containers/DatePick';
import SelectTime from './../helpers/SelectTime';

export default function MReminder({ handleSubmit }) {
  return (
    <div className='com-item'>
      <div className='com-icon bell'>
        <svg>
          <use xmlnsXlink='http://www.w3.org/1999/xlink' xlinkHref='#bell' />
        </svg>
      </div>
      <div className='comment'>
        <div className='comment-title'>
          Назначить напоминание
          <svg onClick={handleSubmit} data-type='close'>
            <use xmlnsXlink='http://www.w3.org/1999/xlink' xlinkHref='#close' />
          </svg>
        </div>
        <form onSubmit={handleSubmit}>
          <div className='date'>
            <p>Начало в:</p>
            <div className='input'>
              <DatePick />
            </div>
            <SelectTime />
          </div>
          <p>Напоминание:</p>
          <textarea defaultValue={''} />
          <input type='submit' value='Установить' className='btn' style={{ padding: '0 20px' }} />
        </form>
      </div>
    </div>
  );
}
