export default function isUserChecked(e) {
  const element = e.target;
  const groupData = this.state.groupData;
  const id = element.getAttribute('data-id');
  const applicantsData = this.state.applicantsData;
  let ids = groupData.ids || [];
  if (element.checked) {
    ids.push(+id);
  } else {
    ids = ids.filter((idx) => idx != id);
  }
  const applicants = ids.length ? applicantsData.filter((obj) => ids.includes(+obj.id)) : [];
  groupData.ids = ids;
  groupData.applicants = applicants;
  this.setState({ groupData });
}
