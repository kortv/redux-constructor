import React from 'react';
import Values from './comp-templates/Values';
import TextComp from './comp-templates/Text';
import Team from './comp-templates/Team';
import Social from './comp-templates/Social';
import HistoryComp from './comp-templates/History';
import Video from './comp-templates/Video';
import Galery from './comp-templates/Galery';
import Header from './comp-templates/Header';
import Navbar from './comp-templates/Navbar';
import Jobs from './comp-templates/Jobs';
import About from './comp-templates/About';


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

  default:
    console.log(cont);
  }

  return (
    <Element content={cont} handleClick={handleClick} />
  );
}
