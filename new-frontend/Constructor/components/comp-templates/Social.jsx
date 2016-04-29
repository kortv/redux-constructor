import React from 'react';

import CompControls from './helpers/CompControls';

export default function Social({ handleClick, content }) {
  return (
    <section className='no-pad'>
      <CompControls handleClick={handleClick} />
      <div className='social-bar'>
        <div className='col-sm-4 no-pad col-md-4'>
          <a href={content.content[0].twitter}>
            <div className='link bg-twitter'>
              <div className='initial'>
                <i className='fa fa-twitter'></i>
              </div>
              <div className='hover-state'>
                <span className='text-white'>наш твиттер</span>
              </div>
            </div>
          </a>
        </div>
        <div className='col-sm-4 no-pad col-md-4'>
          <a href={content.content[0].fb}>
            <div className='link bg-facebook'>
              <div className='initial'>
                <i className='fa fa-facebook'></i>
              </div>
              <div className='hover-state'>
                <span className='text-white'>мы на Facebook</span>
              </div>
            </div>
          </a>
        </div>
        <div className='col-sm-4 no-pad col-md-4'>
          <a href={content.content[0].vk}>
            <div className='link bg-vk'>
              <div className='initial'>
                <i className='fa fa-vk'></i>
              </div>
              <div className='hover-state'>
                <span className='text-white'>наша группа вконтакте</span>
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>

  );
}
