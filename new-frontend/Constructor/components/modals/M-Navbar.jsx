import React from 'react';

export default function ModalNavBar({ handleChange, content }) {
  const btns = content.content ? content.content.map((obj, key) => (
    <div className='main-container' key={key}>
      <div className='col-xs-8'>
        <label className='control-label'>Кнопка: {key + 1}</label>
      </div>
      <div className='col-xs-4'>
        <a href='#' onClick={handleChange} data-type='del-btn' data-key={key}
          className='btn pull-right'
        >
          Удалить кнопку <span aria-hidden='true'>&#x2212;</span>
        </a>
      </div>
      <div className='col-xs-4'>
        <input className='form-control' type='text' placeholder='наименование'
          onChange={handleChange} defaultValue={obj.name} data-type='name' data-key={key}
        />
      </div>
      <div className='col-xs-8'>
        <input className='form-control'type='text' onChange={handleChange}
          defaultValue={obj.link} data-type='link' data-key={key} placeholder='ссылка'
        />
      </div>
    </div>
  )) : '';
  return (
    <div className='modal-body'>
      <form role='form'>
        <div className='form-group'>
          {btns}
          <div className='col-sm-12'>
            <a href='#' onClick={handleChange} data-type='add-btn' className='btn pull-right'>
              Добавить кнопку <span aria-hidden='true'>&#x2b;</span>
            </a>
          </div>
        </div>
      </form>
    </div>
  );
}
