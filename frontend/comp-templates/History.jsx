import React from 'react';
import CompControls from './helpers/CompControls';

export default function History({ handleClick, content }) {
  const allContents = content.content ? (content.content.map((obj, key) => ((key + 1) % 2 ?
      (<div key={key} className='timeline-event'>
        <div className='col-sm-6 col-sm-push-6'>
          <h2>{obj.year || 'Год'}</h2>
          <h5>{obj.head || 'Заголовок'}</h5>
        </div>
        <div className='middle'>
          <i className={`icon icon-${obj.icon || 'genius'}`}></i>
          <div className='vertical-line'></div>
        </div>
        <div className='col-sm-6 col-sm-pull-6'>
          <p>
            {obj.txt || 'Описание события'}
          </p>
        </div>
      </div>) : (<div key={key} className='timeline-event'>
        <div className='col-sm-6'>
          <h2>{obj.year || 'Год'}</h2>
          <h5>{obj.head || 'Заголовок'}</h5>
        </div>
        <div className='middle'>
          <i className={`icon icon-${obj.icon || 'genius'}`}></i>
          <div className='vertical-line'></div>
        </div>
        <div className='col-sm-6'>
          <p>
            {obj.txt || 'Описание события'}
          </p>
        </div>
      </div>))
    )) : '';
  return (
    <section>
      <CompControls handleClick={handleClick} />
      <div className='timeline-1'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-8 col-md-offset-2 col-sm-10 col-sm-offset-1 text-center'>
              <h1>{content.header}</h1>
              <p className='lead'>
                {content.text}
              </p>
            </div>
          </div>
          <div className='row'>
            <div className='col-sm-12'>
              {allContents}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
