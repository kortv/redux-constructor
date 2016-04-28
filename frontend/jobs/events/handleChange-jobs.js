import axios from 'axios';

export default function handleChange(e) {
  e.preventDefault();
  const type = e.currentTarget.getAttribute('data-type');
  const modal = { ...this.state.modalData };
  const commentField = { ...this.state.commentFieldData };
  const data = [...this.state.userData];
  const idx = e.currentTarget.getAttribute('data-key');
  const objId = data.filter((obj) => obj.id === modal.id);
  const index = data.indexOf(objId[0]);

// console.log(e.target)
// console.log(e.currentTarget)
// console.log(type);
// console.log(modal);
// console.log(commentField);
// console.log(data);
// console.log(idx);
// console.log(objId);
// console.log(index);

  if (type === 'close') {
    this.setState({
      commentFieldData: { idx: -1 },
    });
  } else if (type === 'save') {
    this.sendData();
    this.setState({
      userData: data.concat(commentField),
      commentFieldData: { idx: -1 },
    });
  } else if (type === 'del-btn') {
    modal.content.splice(idx, 1);

    this.setState({
      modalData: modal,
    });
  } else if (type === 'commentText' || type === 'header') {
    const value = e.target.value;
    // console.log(value)
    commentField.body = value;

    this.setState({
      commentFieldData: commentField,
    });
  } else if (type === 'bg') {
    const file = e.target.files[0];

    if (file) {
      const formData = new FormData();
      formData.append('image[file]', file);

      const AUTH_TOKEN = document.querySelector('meta[name="csrf-token"]').getAttribute('content');
      axios.defaults.headers['X-CSRF-Token'] = AUTH_TOKEN;

      axios.post('/images.json', formData)
        .then((response) => {
          if (response) {
            console.log(response);
            const value = response.data.url;
            data[index][type] = value;
            modal[type] = value;

            this.setState({
              userData: data,
              modalData: modal,
            });
          }
        }).catch((response) => {
          console.log(response);
          console.log(response.data);
        });
    } else {
      console.log(e.target.files[0]);
    }
  } else {
    // console.log(type)
    // console.log(modal)
    // console.log(data)
    // console.log(idx)
    // console.log(objId)
    // console.log(index)
    const value = e.target.value;
    // console.log(data[index].content[idx])
    data[index].content[idx][type] = value;

    this.setState({
      userData: data,
    });
  }
}
