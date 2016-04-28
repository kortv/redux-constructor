import React from 'react';
import IconPicker from './IconPicker';

export default function MValue({ handleChange, content }) {
  const events = content.content ? content.content.map((obj, key) => {
    const icons = obj.iconList ? <IconPicker handleChange={handleChange} id={key} /> : '';
    return (
      <div className='main-container' key={key}>
        <div className='col-sm-8'>
          <label className='control-label'>Достижение: {key + 1 }</label>
        </div>
        <div className='col-sm-4'>
          <a href='#' onClick={handleChange} data-type='del-btn'
            data-key={key} className='btn pull-right'
          >
            Удалить достижение <span aria-hidden='true'>&#x2212;</span>
          </a>
        </div>
        <div className='col-sm-4'>
          <div className='input-group'>
            <span className='input-group-btn'>
              <button style={{ minWidth: 'auto' }} onClick={handleChange} data-key={key}
                data-type='iconList' className='col-sm-7 btn btn-default' type='button'
              >Выбрать иконку</button>
              <div className='col-sm-3 feature-icon-small' style={{ marginBottom: 0 }}>
                <i style={{ marginBottom: 0 }} className={`icon icon-${obj.icon || 'genius'}`}> </i>
              </div>
            </span>
          </div>
        </div>

        <div className='col-sm-8'>
          <input onChange={handleChange}
            type='text' className='form-control' defaultValue={obj.head}
            placeholder='Заголовок' data-type='head' data-key={key}
          />
        </div>
        {icons}
        <div className='form-group col-sm-12'>
          <textarea
            onChange={handleChange} data-type='txt' data-key={key}
            placeholder='Текст' className='form-control' defaultValue={obj.txt}
          >
          </textarea>
        </div>
      </div>
    );
  }) : '';
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

        <div className='form-group'>
          {events}
          <a href='#' onClick={handleChange} data-type='add-btn' className='btn'>
            Добавить достижение <span aria-hidden='true'>&#x2b;</span>
          </a>
        </div>
      </form>
    </div>
  );
}
