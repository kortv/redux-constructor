import React from 'react';
import JobsContent from './JobsContent';

export default function JobsData({ klass, handleClick, user }) {
  let data = (<div></div>);
  if (user.length) {
    const userCont = [...user].reverse().map((cont, key) => (
      <JobsContent cont={cont} handleClick={handleClick} key={key} />
    ));
    data = (
      <div className={klass}>
        {userCont}
      </div>
    );
  }
  return data;
}
