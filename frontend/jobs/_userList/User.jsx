import React from 'react';

export default function User({ user, userChecked }) {
  const url = window.location.href.split('/').filter((str) => !!str);
  url.length = url.length - 1;
  const str = url.join('/').replace(/(https?):\//, '$1://');
  const link = `${str}/${user.id}/`;
  return (
    <div className='user'>
      <div className='checkbox'>
        <input
          type='checkbox' onChange={userChecked} data-id={user.id}
          defaultValue={1} id={`check-${user.id}`}
        />
        <label htmlFor={`check-${user.id}`}>
          <svg className='square'>
            <use xlinkHref='#square' />
          </svg>
          <svg className='checked'>
            <use xlinkHref='#checked' />
          </svg>
        </label>
      </div>
      <a href={link}>
        <img src='./../../../dummy/2.jpg' alt /></a>
      <a href={link}>
        <div className='user-name'>{user.name}</div></a>
      <div className='user-post'>Manager</div>
      <div className='user-time'>
        <div className='tags'>
          <a href>#классный</a>
          <a href>#superman</a>
          <a href>#nogo</a>
        </div>
        <p>From workable.com 6 days ago</p>
      </div>
    </div>
  );
}
