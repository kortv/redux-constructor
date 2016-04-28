import initialData from './initialData';

export default function add(elem) {
  const type = elem.parentNode.previousSibling.childNodes[0].value;
  const data = this.state.userData;
  const addData = { ...initialData[type] };
  addData.id = data.length + 1;
  addData.type = type;

  data.unshift(addData);
  this.setState({
    userData: data,
  });
}
