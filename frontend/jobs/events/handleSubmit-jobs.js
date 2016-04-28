import axios from 'axios';
const AUTH_TOKEN = document.querySelector('meta[name="csrf-token"]').getAttribute('content');
axios.defaults.headers['X-CSRF-Token'] = AUTH_TOKEN;

export default function handleSubmit(e) {
  if (e.type === 'click') {
    this.setState({
      commentFieldData: { idx: -1 },
    });
    return;
  }

  e.preventDefault();
  const data = { ...this.state.commentFieldData };
  const targetForm = e.target;
  const formInputsDataAll = targetForm.querySelectorAll('input, select, textarea');
  let file = '';
  let newDate = '';
  console.log(formInputsDataAll);

  [...formInputsDataAll].forEach((obj) => {
    console.log(obj.type);
    switch (obj.type) {

    case 'text':
      newDate = new Date(obj.value.split('.').reverse().join(' '));
      // this.edit(idx);
      data.from = newDate;
      data.to = newDate;
      break;

    case 'select-one':
      data.from.setHours(+obj.value);
      data.to.setHours(+obj.value);
      break;

    case 'textarea':
      // this.edit(idx);
      data.body = obj.value;
      break;

    case 'file':
      file = obj.files[0] || '';
      // this.edit(idx);
      break;

    default:
      console.log(obj.type);
    }
  });
  console.log(data);
  // const fileInput = targetForm.querySelector('input[type="file"]')
  // const file = fileInput ? fileInput.files[0] : '';
  // const date = targetForm.querySelector('input[type="text"]').value;
  // const time = targetForm.querySelector('select').value;
  // console.log(date, time);
  axios.post('/events/', data)
    .then((response) => {
      console.log(response);
      if (file) {
        const formData = new FormData();
        formData.append('documents_attributes[0][attach]', file);
        formData.append('id', response.data.id);
        formData.append('type', response.data.type);

        axios.put('/events/', formData)
          .then((putResponse) => {
            this.setState({
              commentFieldData: { idx: -1 },
              userData: this.state.userData.concat(putResponse.data),
            });
          }).catch((putResponse) => {
            console.log(putResponse);
          });
      } else {
        this.setState({
          commentFieldData: { idx: -1 },
          userData: this.state.userData.concat(response.data),
        });
      }
    })
    .catch((response) => {
      console.log(response);
    });
}
