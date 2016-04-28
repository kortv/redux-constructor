import React from 'react';
import ConContent from './ConContent';

export default function MainData({ klass, handleClick, user }) {
  let data = (<div></div>);
  if (user.length) {
    const userCont = user.map((cont, key) => (
      <ConContent cont={cont} handleClick={handleClick} key={key} />
    ));
    data = (
      <div className={klass}>
        {userCont}
      </div>
    );
  }
  return data;
}
