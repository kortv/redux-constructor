export default function edit(idx) {
  const modal = { ...this.state.userData[idx] };
  if (modal.type === 'Jobs') {
    alert('Содержание блока автоматически меняется на сервере.');
  } else {
    this.setState({
      modalData: modal,
    });
  }
}