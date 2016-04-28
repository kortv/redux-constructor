import React from 'react';
import CompControls from './helpers/CompControls';

export default function About({ handleClick, content }) {
  const events = content.content ? content.content.map((obj, key) => (
    <div key={key} style={{ position: 'relative' }}>
      <div className='stat feature'>
        <div className='stat-bubble'>
          <span>{obj.number || '#'}</span>
        </div>
        <h3>{obj.name || 'Достижений'}</h3>
      </div>
    </div>)) : '';
  const style = content.hasOwnProperty('bg') ? { background: `url(${content.bg})` } : {};
  return (
    <section>
      <CompControls handleClick={handleClick} />
      <div className='container'>
        <div className='background-image-holder' style={ style }>
        </div>
        <div className='row'>
          <div className='col-md-8 col-md-offset-2 col-sm-10 col-sm-offset-1 text-center'>
            <h1 className='text-white'>{content.header}</h1>
          </div>
        </div>
        <div className='about'>
          {events}
        </div>
      </div>
    </section>
  );
}
