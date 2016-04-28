export default function dateChange(date) {
  const data = this.state.commentFieldData;
  data.from = date._d.toISOString();
  data.to = date._d.toISOString();
  this.setState({
    commentFieldData: data,
  });
}
