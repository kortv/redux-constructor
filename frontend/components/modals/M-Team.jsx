import React from 'react';

export default function MTeam({ handleChange, content }) {
  const workers = content.content ? content.content.map((obj, key) => (
    <div className='main-container' key={key}>
      <br />
      <div className='col-xs-8'>
        <label className='control-label'>Работник {key + 1 }: </label>
      </div>
      <div className='col-xs-4'>
        <a href='#' onClick={handleChange} data-type='del-btn'
          data-key={key} className='btn pull-right'
        >
          Удалить Работника
        </a>
      </div>
      <div className='col-sm-4'>
        <span className='file-input btn btn-default btn-file'>
          Выберите файл&hellip;
          <input type='file' data-key={key} onChange={handleChange} data-type='pic' />
        </span>
        <label className='control-label'> </label>
        <img className='center-block'src={obj.pic ||
          'img/team-small-1.png'} alt='Фото сотрудника...'
        />
      </div>
      <div className='col-sm-4'>
        <input className='form-control' type='text' placeholder='Имя Фамилия'
          onChange={handleChange} defaultValue={obj.name} data-type='name' data-key={key}
        />
      </div>
      <div className='col-sm-4'>
        <input className='form-control' type='text' placeholder='Должность сотрудника'
          onChange={handleChange} defaultValue={obj.place} data-type='place' data-key={key}
        />
      </div>
      <br />
      <div className='col-sm-8'>
        <label className='control-label'> </label>
        <textarea placeholder='Информация о сотрунике' style={{ minHeight: '100px' }}
          data-type='txt' onChange={handleChange} data-key={key}
          className='form-control' defaultValue={obj.txt}
        >
        </textarea>
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

        <div className='form-group'>
          {workers}
          <a href='#' onClick={handleChange} data-type='add-btn' className='btn'>
            Добавить Работника <span aria-hidden='true'>&#x2b;</span>
          </a>
        </div>
      </form>
    </div>
  );
}
