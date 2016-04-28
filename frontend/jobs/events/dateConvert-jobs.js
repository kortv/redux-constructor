export default function dateConvert(date) {
  const newDate = new Date(date);
  const options = {
    day: 'numeric',
    month: 'long',
    hour: '2-digit',
    minute: 'numeric',
  };
  return newDate.toLocaleDateString('ru-RU', options).split(', ').join(' в ');
}
