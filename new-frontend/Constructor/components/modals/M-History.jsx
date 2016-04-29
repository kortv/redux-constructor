import React from 'react';
import IconPicker from './IconPicker';


export default function MHistory({ handleChange, content }) {
  const events = content.content ? content.content.map((obj, key) => {
    const icons = obj.iconList ? <IconPicker handleChange={handleChange} id={key} /> : '';

    return (
      <div className='main-container' key={key}>
        <div className='col-xs-8'>
          <label className='control-label'>Событие: {key + 1 }</label>
        </div>
        <div className='col-xs-4'>
          <a href='#' onClick={handleChange} data-type='del-btn'
            data-key={key} className='btn pull-right'
          >
            Удалить событие <span aria-hidden='true'>&#x2212;</span>
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
        <div className='col-xs-3'>
          <div className='input-group'>
            <span className='input-group-addon' id='basic-addon1'>Год</span>
            <input onChange={handleChange}
              type='text' className='form-control' defaultValue={obj.year}
              placeholder='Год события' data-type='year' data-key={key}
            />
          </div>
        </div>
        <div className='col-xs-5'>
          <div className='input-group'>
            <span className='input-group-addon' id='basic-addon1'>Заголовок</span>
            <input onChange={handleChange}
              type='text' className='form-control' defaultValue={obj.head}
              placeholder='Заголовок события' data-type='head' data-key={key}
            />
          </div>
        </div>
        {icons}
        <div className='form-group col-xs-12'>
          <label className='control-label'>Текст:</label>
          <textarea
            onChange={handleChange} data-type='txt' data-key={key}
            placeholder='Заголовок события' className='form-control' defaultValue={obj.txt}
          >
          </textarea>
        </div>
      </div>
    );
  }) : '';
  return (
    <div className='modal-body'>
      <form role='form'>
        <div className='form-group'>
          <textarea placeholder='Заголовок компонента'
            data-type='header' onChange={handleChange}
            className='form-control' defaultValue={ content.header }
          >
          </textarea>
        </div>
        <div className='form-group'>
          <textarea placeholder='Описание компонента'
            data-type='text' onChange={handleChange}
            className='form-control' defaultValue={content.text}
          >
          </textarea>
        </div>
        <div className='form-group'>
          {events}
          <a href='#' onClick={handleChange} data-type='add-btn' className='btn'>
            Добавить событие <span aria-hidden='true'>&#x2b;</span>
          </a>
        </div>
      </form>
    </div>
  );
}
