import React from 'react';
import CompControls from './helpers/CompControls';

export default function Jobs({ content, handleClick }) {
  const jobs = content.content ? content.content.map((obj, key) => {
    const element = (
      <div key={key} className='col-sm-6'>
        <a href={obj.url}><h4>{obj.name}</h4></a>
        <br />
        <p>{obj.description}</p>
        <br />
      </div>);
    return element;
  }) : (<h3 className='text-center col-xs-offset-1 col-xs-10'>
    Вакансии подгрузяться после сохранения данных на сервер
  </h3>);
  let leng = jobs.length;
  for (leng; leng >= 1; leng--) {
    if (!((leng) % 2)) {
      jobs.splice(leng, 0, <div key={`row${leng}`} className='col-xs-12'></div>);
    }
  }
  return (
    <section>
      <CompControls handleClick={handleClick} />
      <div className='col-xs-10 col-xs-offset-1'>{jobs}</div>
    </section>
  );
}
