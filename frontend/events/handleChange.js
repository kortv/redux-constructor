import axios from 'axios';

export default function handleChange(e) {
  e.preventDefault();
  const type = e.currentTarget.getAttribute('data-type');
  const modal = { ...this.state.modalData };
  const data = [...this.state.userData];
  const idx = e.currentTarget.getAttribute('data-key');
  const objId = data.filter((obj) => obj.id === modal.id);
  const index = data.indexOf(objId[0]);

  if (type === 'close') {
    this.setState({
      modalData: {},
    });
  } else if (type === 'add-btn') {
    modal.content = modal.content || [];
    modal.content.push({

    });
    this.setState({
      modalData: modal,
    });
  } else if (type === 'del-btn') {
    modal.content.splice(idx, 1);

    this.setState({
      modalData: modal,
    });
  } else if (type === 'text' || type === 'header') {
    const value = e.target.value;
    data[index][type] = value;

    this.setState({
      userData: data,
    });
  } else if (type === 'iconList') {
    modal.content[idx].iconList = !modal.content[idx].iconList;
    this.setState({
      modalData: modal,
    });
  } else if (type === 'icon') {
    const value = e.currentTarget.getAttribute('data-value');
    modal.content[idx].iconList = false;
    data[index].content[idx][type] = value;
    modal.content[idx][type] = value;

    this.setState({
      modalData: modal,
      userData: data,
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
  } else if (type === 'pic') {
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
            data[index].content[idx][type] = value;
            modal.content[idx][type] = value;

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
  } else if (type === 'videoLink') {
    const video = e.target.value;
    const regExp = /(?:^.*youtu\.?be.*\/(?:watch\?v=)?(.+)\/?$)|(?:^.*vimeo\.com.*\/(\d+)\/?$)/g;
    const value = video.replace(regExp, (str, a, b) => {
      if (a) {
        return `http://www.youtube.com/embed/${a}`;
      } else if (b) {
        return `https://player.vimeo.com/video/${b}`;
      } return str;
    });
    console.log(data[index].content[idx]);
    data[index].content[idx][type] = value;

    this.setState({
      userData: data,
    });
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

/*  if (type === 'name' || type === 'link' ||
      type === 'fb' || type === 'vk' || type === 'twitter' ||
      type === 'year' )*/
