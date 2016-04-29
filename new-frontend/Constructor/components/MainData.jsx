import React from 'react';
import ConContent from './ConContent';

export default function MainData({ klass, handleClick, user, isFetching }) {
  let data = (<div></div>);
  console.log(user);
  if (!isFetching) {
    const userCont = user.map((cont, key) => {
      // console.log(cont);
      const a = 1;
      return (
        <ConContent cont={cont} handleClick={handleClick} key={key + a} />
      ); });
    data = (
      <div className={klass}>
        {userCont}
      </div>
    );
  }
  return data;
}
