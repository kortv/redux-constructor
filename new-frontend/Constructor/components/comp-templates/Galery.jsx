import React from 'react';
import CompControls from './helpers/CompControls';

export default function Galery({ handleClick, content }) {
  const photos = content.content ? content.content.map((obj, key) => (
    <div key={key} className={`col-sm-${obj.width || 12}`}>
      <div className='image-holder'>
        <a href={obj.pic || 'img/side1.jpg'}>
          <div
            className='background-image-holder'
            style={{ background: `url(${obj.pic || 'img/side1.jpg'})` }}
          >
          </div>
        </a>
      </div>
    </div>
  )) : '';

  return (
    <section>
      <CompControls handleClick={handleClick} />
      <div className='container'>
        <div className='row'>
          <div className='col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2 text-center'>
            <h1>{content.header}</h1>
            <p className='lead'>{content.text}</p>
          </div>
        </div>
        <div className='row'>
          <div className='image-gallery lightbox-gallery-mrv'>
            {photos}
          </div>
        </div>
      </div>
    </section>

  );
}
