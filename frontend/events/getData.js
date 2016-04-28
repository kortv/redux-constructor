import axios from 'axios';
export default function getData(path) {
  axios.get(path)
  .then((data) => {
    let mainData = [];
    if (data.data.blocks) {
      mainData = [...data.data.blocks];
      if (data.data.jobs) {
        const jobs = mainData.filter((obj) => obj.type === 'Jobs');
        const index = mainData.indexOf(jobs[0]);
        mainData[index].content = [...jobs];
      }
    } else if (data.data.events) {
      mainData = [...data.data.events].map((obj) => ({ ...obj,
        applicant_name: data.data.name,
        applicant_avatar: data.data.avatar,
      }));
    }
    this.setState({
      userData: mainData,
    });
  })
  .catch((response) => {
    console.log('get data error');
    console.log(response);
  });
}