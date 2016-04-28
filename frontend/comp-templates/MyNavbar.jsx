import React from 'react';

export default function NavBar({ handleClick }) {
  return (
    <nav className='simple-bar' style={{ position: 'relative' }}>
      <div className='container'>
        <div className='row nav-menu'>
          <div className='columns text-left col-md-12'>
            <ul className='menu'>
              <li>
                <select className='form-control form-sm'>
                  <option value='Values'>Values</option>
                  <option value='Navbar'>Navbar</option>
                  <option value='Header'>Header</option>
                  <option value='Galery'>Galery</option>
                  <option value='Team'>Team</option>
                  <option value='HistoryComp'>HistoryComp</option>
                  <option value='Video'>Video</option>
                  <option value='Social'>Social</option>
                  <option value='TextComp'>TextComp</option>
                  <option value='Jobs'>Jobs</option>
                  <option value='About'>About</option>
                </select>
              </li>
              <li><a data-type='add' onClick={handleClick} href='#'>Добавить поле</a></li>
              <li></li>
              <li></li>
              <li><a onClick={handleClick} data-type='sendData' href='#'>
                Сохранить настройки на сервер
              </a></li>
            </ul>
          </div>
        </div>
        <div className='mobile-toggle'>
          <i className='icon icon_menu'></i>
        </div>
      </div>
    </nav>
  );
}
