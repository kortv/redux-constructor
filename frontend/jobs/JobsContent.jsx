import React from 'react';
import Comment from './../jobs/Comment';
import Email from './../jobs/Email';
import Reminder from './../jobs/Reminder';
import Schedule from './../jobs/Schedule';
import Response from './../jobs/Response';
import Initiate from './../jobs/Initiate';
import Stage from './../jobs/Stage';


export default function JobsContent({ handleClick, cont }) {
  let Element = <div></div>;
  switch (cont.type) {

  case 'Event::Comment':
    Element = Comment;
    break;

  case 'Event::Email':
    Element = Email;
    break;

  case 'Event::Reminder':
    Element = Reminder;
    break;

  case 'Event::Schedule':
    Element = Schedule;
    break;

  case 'Event::Response':
    Element = Response;
    break;

  case 'Event::Initiate':
    Element = Initiate;
    break;

  case 'Event::Stage':
    Element = Stage;
    break;


  default:
    console.log(cont);
  }

  return (
    <Element content={cont} handleClick={handleClick} />
  );
}
