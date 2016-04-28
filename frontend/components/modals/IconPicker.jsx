import React from 'react';
import icons from './icons';


export default function IconsPicker({ handleChange, id }) {
  const allIcons = icons.map((ico, key) => (
    <a key={key} onClick={handleChange} data-key={id} data-value={ico} data-type='icon' href='#'>
      <i className={`icon icon-${ico}`}></i></a>));
  return (
    <div className='feature-icon-small icon-modal'>
      {allIcons}
    </div>
  );
}
