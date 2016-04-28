import React from 'react';
import CompControls from './helpers/CompControls';

export default function Team({ handleClick, content }) {
  let workers = content.content ? content.content.map((obj, key) => {
    const element = (<div key={key} className='col-sm-4'>
      <div className='team-1-member'>
        <img className='img-circle' height='200' alt='Наш сотрудник...' src={obj.pic ||
          'img/team-small-1.png'}
        />
        <h2>{obj.name || 'Имя Фамилия'}</h2>
        <h5>{obj.place || 'Должность'}</h5>
        <p className='space-top-small'>{obj.txt || 'Информация о сотруднике'}</p>
      </div>
    </div>);
    return element;
  }) : '';
  let leng = workers.length;
  for (leng; leng >= 1; leng--) {
    if (!((leng) % 3)) {
      workers.splice(leng, 0, <div key={`row${leng}`} className='col-xs-12'></div>);
    }
  }
  return (
    <section>
      <CompControls handleClick={handleClick} />
      <div className='team-1'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-8 col-md-offset-2 text-center'>
              <h1>{content.header}</h1>
            </div>
          </div>
          <div className='row space-bottom-large'>
            {workers}
          </div>
        </div>
      </div>
    </section>
  );
}
