import axios from 'axios';
export default function getData(path, filters) {
  const url = window.location.href.split('/').filter((str) => !!str).reverse();

  const filter = !filters ? this.state.filter : filters === 'home' ? '' : filters;
  const filterType = filter ? `?type[]=${filter}` : '';
  const pathToData = !!path ? path : `/jobs/${url[1]}/${url[0]}.json/${filterType}`;

  axios.get(pathToData)
  .then((data) => {
    console.log(data);
    // let mainData = [];
    if (data.data) {
      this.setState({
        userData: [...data.data.events],
        applicant_id: url[0],
        job_id: url[1],
      });
    }
  })
  .catch((response) => {
    console.log('get data error');
    console.log(response);
  });
}
