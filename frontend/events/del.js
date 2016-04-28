export default function del(idx) {
  const data = [...this.state.userData];
  data.splice(idx, 1);
  this.setState({
    userData: data,
  });
}
