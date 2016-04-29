import React from 'react';

export default function MSocial({ handleChange, content }) {
  const cont = content.content[0];
  return (
    <div className='modal-body'>
      <form role='form'>
        <div className='form-group'>
          <div className='main-container'>
            <div className='col-xs-4'>
              <input
                className='form-control' type='text' onChange={handleChange} value={cont.twitter}
                data-type='twitter' data-key='0' placeholder='Ссылка на ваш Twitter'
              />
            </div>
            <div className='col-xs-4'>
              <input
                className='form-control' type='text' onChange={handleChange}
                value={cont.fb} data-type='fb' data-key='0' placeholder='Ссылка на ваш Faicebook'
              />
            </div>
            <div className='col-xs-4'>
              <input className='form-control' type='text' onChange={handleChange}
                value={cont.vk} data-type='vk' data-key='0' placeholder='Ссылка на ваш VK'
              />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}