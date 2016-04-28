import React from 'react';
import Reminder from './commentsField/F-Reminder';
// import Stage from './commentsField/F-Stage';
// import Initiate from './commentsField/F-Initiate';
// import Response from './commentsField/F-Response';
import Schedule from './commentsField/F-Schedule';
import Email from './commentsField/F-Email';
import Comment from './commentsField/F-Comment';

const arr = [Comment, Reminder, Email, Schedule];

export default function CommentsField({ data, handleChange, dateChange, handleSubmit }) {
  const Element = arr[data.idx] || (<div></div>);

  const el = data.idx >= 0 ?
    (<Element content={data} dateChange={dateChange}
      handleChange={handleChange} handleSubmit={handleSubmit}
    />) : (<div></div>);
  return el;
}
