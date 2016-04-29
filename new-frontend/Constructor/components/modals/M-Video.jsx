import React from 'react';

export default function ModalHeader({ handleChange, content }) {
  return (
    <div className='modal-body'>
      <form role='form'>
        <div className='form-group col-sm-12'>
          <textarea
            data-type='header' onChange={handleChange} placeholder='Заголовок'
            className='form-control' defaultValue={ content.header }
          >
          </textarea>
        </div>
        <br />
        <div className='form-group col-sm-12'>
          <textarea
            data-type='text' onChange={handleChange} placeholder='Основной текст'
            className='form-control' defaultValue={content.text}
          >
          </textarea>
        </div>
        <div className='form-group'>
          <div className='col-sm-3'>
            <label className='control-label'>Ссылка на видео:</label>
          </div>
          <div className='col-sm-9'>
            <input className='form-control'type='text' data-type='videoLink' data-key='0'
              placeholder='Вставте сюда то что идет после https://youtu.be/...'
              onChange={handleChange} defaultValue={content.content[0].videoLink}
            />
          </div>
        </div>

      </form>
    </div>
  );
}
