export default function setGroupAction(id) {
  const actions = ['', 'decline', 'stage', 'email'];
  const groupData = { ...this.state.groupData };
  groupData.action_name = actions[id];

  this.setState({ groupData });
}
