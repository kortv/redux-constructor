import axios from 'axios';

const AUTH_TOKEN = document.querySelector('meta[name="csrf-token"]').getAttribute('content');
axios.defaults.headers['X-CSRF-Token'] = AUTH_TOKEN;

export default function sendData() {
  axios.post('/events/',
    { ...this.state.commentFieldData }
  )
    .then((response) => {
      console.log(response);
      // if (response.data.blocks) {
      //   this.setState({
      //     userData: response.data.blocks,
      //   });
      // }
    })
    .catch((response) => {
      console.log(response);
    });
}
