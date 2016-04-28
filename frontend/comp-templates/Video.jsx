import React from 'react';
import CompControls from './helpers/CompControls';

export default function Video({ handleClick, content }) {
  return (
    <section>
      <CompControls handleClick={handleClick} />
      <div className='container'>
        <div className='row'>
          <div className='col-md-6 col-sm-12'>
            <h1 className='space-bottom-medium'>{content.header}</h1>
            <p className='lead space-bottom-medium'>{content.text}</p>
          </div>
          <div className='col-md-6 col-sm-12'>
            <iframe
              width='100%' height='315' frameBorder='0' allowFullScreen='1'
              src={content.content[0].videoLink || 'http://www.youtube.com/embed/SZEflIVnhH8'}
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
