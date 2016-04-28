import React from 'react';
// import CompControls from './helpers/CompControls';

export default function Reminder(/* { content, handleClick } */) {
  return (
    <div className='hidden'>
      <div className='topper'>
        <div className='top-link current'>Первый этап</div>
        <div className='top-link blue'>Второй этап <span>2</span></div>
        <div className='top-link'>Третий этап</div>
        <div className='top-link two'>Четвертый этап<br />Четвертый этап</div>
        <div className='top-link'>Пятый этап</div>
        <div className='top-link'>Шестой этап</div>
      </div>
    </div>
  );
}
