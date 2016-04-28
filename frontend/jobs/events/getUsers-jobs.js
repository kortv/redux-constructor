import axios from 'axios';
export default function getUsers(path) {
  const url = window.location.href.split('/').filter((str) => !!str).reverse();
  const pathToData = path || `/jobs/${url[1]}.json`;

  axios.get(pathToData)
  .then((data) => {
    console.log(data);
    // let mainData = [];
    if (data.data) {
      this.setState({
        applicantsData: [...data.data.applicants],
      });
    }
  })
  .catch((response) => {
    console.log('get data error');
    console.log(response);
  });
}