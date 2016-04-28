import openMsgs from './openMsgs-jobs';

export default function filter(id) {
  const filterTypes = [
    'home', 'Event::Schedule', 'Event::Comment', 'Event::Reminder', 'Event::Email',
  ];
  const storageFilter = filterTypes[+id] === 'home' ? '' : filterTypes[+id];
  sessionStorage.setItem('timelineFilter', storageFilter);

  this.setState({
    filter: filterTypes[+id],
  });

  this.getData('', filterTypes[+id]);
  openMsgs();
}
