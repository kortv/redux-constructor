import React from 'react';
import CompControls from './helpers/CompControls';

export default function Values({ handleClick, content }) {
  const allContents = content.get('content') ? (content.get('content').map((obj, key) => (
    <div key={key} className='col-sm-6'>
      <div className='feature feature-icon-large'>
        <div className='pull-left'>
          <i className={`icon icon-${obj.get('icon') || 'genius'}`}></i>
        </div>
        <div className='pull-right'>
          <h5>{obj.get('head') || 'Заголовок'}</h5>
          <p>{obj.get('txt') || 'Текст'}</p>
        </div>
      </div>
    </div>)
  )) : '';
  return (
    <section>
      <CompControls handleClick={handleClick} />
      <div className='duplicatable-content'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-12 text-center'>
              <h1>{content.get('header')}</h1>
            </div>
          </div>
          <div className='row'>
            {allContents}
          </div>
        </div>
      </div>
    </section>
  );
}
