import React from 'react';
import User from './_userList/User';

export default function UserList({ users, userChecked }) {
  const data = users.length ? users.map((user, key) => <User
    key={key} user={user} userChecked={userChecked}
  />) : '';
  return (
    <div className='users'>
      {data}
    </div>
  );
}
