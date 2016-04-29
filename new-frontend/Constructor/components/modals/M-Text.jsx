import React from 'react';

export default function ModalText({ content, handleChange }) {
  return (
    <div className='modal-body'>
      <form role='form'>
        <div className='form-group'>
          <label className='control-label'>Заголовок:</label>
          <textarea
            data-type='header' onChange={handleChange}
            className='form-control' defaultValue={ content.header }
          >
          </textarea>
        </div>
        <div className='form-group'>
          <label className='control-label'>Текст:</label>
          <textarea
            data-type='text' onChange={handleChange}
            className='form-control' defaultValue={content.text}
          >
          </textarea>
        </div>
      </form>
    </div>
  );
}
