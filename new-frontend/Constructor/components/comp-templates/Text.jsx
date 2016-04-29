import React from 'react';
import CompControls from './helpers/CompControls';

export default function Text({ content, handleClick }) {
  return (
    <section>
      <CompControls handleClick={handleClick} />

      <div className='text-banner'>
        <div className='container text-center'>
          <div className='row'>
            <div className='col-sm-12'>

              <h1 className='center-block'>{content.get('header')}</h1>
            </div>
          </div>
          <div className='row'>
            <div className='col-sm-10 col-sm-offset-1'>
              <p className='lead'>
                {content.get('text')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
