import axios from 'axios';
const AUTH_TOKEN = document.querySelector('meta[name="csrf-token"]').getAttribute('content');
axios.defaults.headers['X-CSRF-Token'] = AUTH_TOKEN;

export default function groupSubmit(e) {
  if (e.type === 'click') {
    this.setGroupAction(0);
    return;
  }
  e.preventDefault();
  const data = { ...this.state.groupData, job_id: +this.state.job_id  };
  delete data.applicants;
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
      data.event = {};
      data.event.body = obj.value;
      break;

    case 'file':
      file = obj.files[0] || '';
      console.log(file);
      // this.edit(idx);
      break;

    default:
      console.log(obj.type);
    }
  });
  console.log(data);

  axios.post('/applicants/group_action', data)
    .then((response) => {
      console.log(response);
    })
    .catch((response) => {
      console.log(response);
    });
}
