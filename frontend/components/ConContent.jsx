import React from 'react';
import Values from './../comp-templates/Values';
import TextComp from './../comp-templates/Text';
import Team from './../comp-templates/Team';
import Social from './../comp-templates/Social';
import HistoryComp from './../comp-templates/History';
import Video from './../comp-templates/Video';
import Galery from './../comp-templates/Galery';
import Header from './../comp-templates/Header';
import Navbar from './../comp-templates/Navbar';
import Jobs from './../comp-templates/Jobs';
import About from './../comp-templates/About';
import Comment from './../jobs/Comment';
import Email from './../jobs/Email';
import Reminder from './../jobs/Reminder';
import Schedule from './../jobs/Schedule';
import Response from './../jobs/Response';
import Initiate from './../jobs/Initiate';
import Stage from './../jobs/Stage';


export default function ConContent({ handleClick, cont }) {
  let Element = <div></div>;
  switch (cont.type) {
  case 'Header':
    Element = Header;
    break;

  case 'Navbar':
    Element = Navbar;
    break;

  case 'About':
    Element = About;
    break;

  case 'Jobs':
    Element = Jobs;
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
