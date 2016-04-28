export default function pullUp(idx, way) {
  const data = this.state.userData;
  const temp = data[idx + way];
  data[idx + way] = data[idx];
  data[idx] = temp;

  this.setState({
    userData: data,
  });
}
