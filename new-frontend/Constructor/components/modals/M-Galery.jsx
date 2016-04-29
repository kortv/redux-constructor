import React from 'react';

export default function ModalHeader({ handleChange, content }) {
  const photos = content.content ? content.content.map((obj, key) => (
    <div className='main-container' key={key}>
      <br />
      <div className='col-xs-8'>
        <label className='control-label'>Фото {key + 1 }: </label>
      </div>
      <div className='col-xs-4'>
        <a href='#' onClick={handleChange} data-type='del-btn'
          data-key={key} className='btn pull-right'
        >
          Удалить фотографию
        </a>
      </div>
      <div className='col-sm-5'>
        <span className='file-input btn btn-default btn-file'>
          Выберите файл&hellip;
          <input type='file' data-key={key} onChange={handleChange} data-type='pic' />
        </span>
        <label className='control-label'> </label>
      </div>
      <div className='col-sm-7'>
        <div className='input-group'>
          <span className='input-group-addon'>выберите ширину фотографии от 1 до 12</span>
          <input className='form-control' type='number' min='1' max='12'
            placeholder='Ширина фотографии' data-type='width' data-key={key}
            onChange={handleChange} defaultValue={obj.width || 12}
          />
        </div>
      </div>
      <div className='col-sm-12'>
        <img className='center-block'src={obj.pic || 'img/side1.jpg'} alt='' />
      </div>
    </div>
  )) : '';
  return (
    <div className='modal-body'>
      <form role='form'>
        <div className='form-group col-sm-12'>
          <textarea placeholder='Заголовок компонента'
            data-type='header' onChange={handleChange}
            className='form-control' defaultValue={ content.header }
          >
          </textarea>
        </div>
        <div className='form-group col-sm-12'>
          <textarea placeholder='Описание компонента'
            data-type='text' onChange={handleChange}
            className='form-control' defaultValue={content.text}
          >
          </textarea>
        </div>

        <div className='form-group'>
          {photos}
          <a href='#' onClick={handleChange} data-type='add-btn' className='btn'>
            Добавить фотографию <span aria-hidden='true'>&#x2b;</span>
          </a>
        </div>
      </form>
    </div>
  );
}
