import React from 'react';
import TextComp from './modals/M-Text';
import Header from './modals/M-Header';
import Navbar from './modals/M-Navbar';
import Values from './modals/M-Values';
import Team from './modals/M-Team';
import HistoryComp from './modals/M-History';
import Galery from './modals/M-Galery';
import Video from './modals/M-Video';
import Social from './modals/M-Social';
import About from './modals/M-About';

export default function Modal({ data, handleChange }) {
  let content = (<div></div>);

  let Element = (<div></div>);
  switch (data.type) {
  case 'Header':
    Element = Header;
    break;

  case 'About':
    Element = About;
    break;

  case 'Navbar':
    Element = Navbar;
    break;

  case 'Values':
    Element = Values;
    break;

  case 'Team':
    Element = Team;
    break;

  case 'HistoryComp':
    Element = HistoryComp;
    break;

  case 'Galery':
    Element = Galery;
    break;

  case 'Video':
    Element = Video;
    break;

  case 'Social':
    Element = Social;
    break;

  case 'TextComp':
    Element = TextComp;
    break;

  default:
    // console.log(data);
  }

  if (data.hasOwnProperty('id')) {
    content = (
      <div
        className='modal' tabIndex='-1' role='dialog'
        style={{ display: 'flex' }}
      >
        <div className='modal-dialog modal-lg' role='document'>
          <div className='modal-content'>
            <div className='modal-header'>
              <button onClick={handleChange} data-type='close' type='button' className='close'>
                <span aria-hidden='true'>×</span>
              </button>
              <h4>Редактирование компонента</h4>
            </div>
            <Element content={data} handleChange={handleChange} />
          </div>
        </div>
      </div>
    );
  }

  return content;
}
