export default function getDateRange(date1, date2) {
  if (date1 && date2){
    const optionsDate = {
      day: 'numeric',
      month: 'numeric',
      year: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
    };
    const newDate1 = new Date(date1).toLocaleDateString('ru-RU', optionsDate).split(', ');
    // const newDate2 = new Date(date2).toLocaleDateString('ru-RU', optionsDate).split(', ');
    date2.split(', ');
  
    // return `${newDate1[0]} (${newDate1[1]} - ${newDate2[1]})`;
    return `${newDate1[0]} в ${newDate1[1]}`;}
    return '';
}
