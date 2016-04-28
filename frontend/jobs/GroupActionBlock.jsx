import React from 'react';
import Email from './_groupActionBlock/G-Email.jsx';
import Decline from './_groupActionBlock/G-Decline.jsx';

export default function GroupActionBlock({ groupData, groupSubmit }) {
  let Element = (<div></div>);
  switch (groupData.action_name) {
  case 'email':
    Element = Email;
    break;

  case 'decline':
    Element = Decline;
    break;

  case 'stage':
    console.log('stage еще не готов');
    Element = Email;
    break;

  default:
    console.log(groupData);
  }
  const groupField = !groupData.action_name ? (<div></div>) :
    <Element applicants={groupData.applicants} groupSubmit={groupSubmit} />;
  return (<div>{groupField}</div>);
}
