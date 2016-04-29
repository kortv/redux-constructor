import React from 'react';

export default function ModalHeader({ handleChange, content }) {
  const btns = content.content ? content.content.map((obj, key) => (
    <div className='main-container' key={key}>
      <div className='col-xs-8'>
        <label className='control-label'>Достижение {key + 1 }:</label>
      </div>
      <div className='col-xs-4'>
        <a href='#' onClick={handleChange} data-type='del-btn'
          data-key={key} className='btn pull-right'
        >
          Удалить достижение <span aria-hidden='true'>&#x2212;</span>
        </a>
      </div>
      <div className='col-xs-4'>
        <input className='form-control' type='text' placeholder='Достижение'
          onChange={handleChange} defaultValue={obj.name} data-type='name' data-key={key}
        />
      </div>
      <div className='col-xs-8'>
        <input className='form-control'type='text' placeholder='достигнутое число'
        onChange={handleChange} defaultValue={obj.number} data-type='number' data-key={key}
        />
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
        <div className='col-sm-4'>
          <span className='file-input btn btn-default btn-file'>
            Выберите файл&hellip; <input type='file' onChange={handleChange} data-type='bg' />
          </span>
        </div>
        <div className='col-sm-8'>
          <img className='center-block'src={content.bg} height='200' alt='фоновая картинка...' />
        </div>
        <div className='form-group'>
          {btns}
          <a href='#' onClick={handleChange} data-type='add-btn' className='btn'>
            Добавить кнопку <span aria-hidden='true'>&#x2b;</span>
          </a>
        </div>
      </form>
    </div>
  );
}
