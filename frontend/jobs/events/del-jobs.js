import axios from 'axios';

export default function del(id) {
  const message = window.confirm('Вы действительно хотие удалить это сообщение?');
  if (message) {
    console.log('del', id);
    const data = { id };
    axios.delete(`/events/${id}`, data)
    .then((response) => {
      console.log(response);
      this.getData();
    })
    .catch((response) => {
      console.log(response);
    });
  }
}
