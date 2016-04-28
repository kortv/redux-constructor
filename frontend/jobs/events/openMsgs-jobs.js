export default function openMsgs() {
  const timelineMsgs = document.querySelector('#timelineMsgs');
  const isOpen = /open/.test(timelineMsgs.className);
  if (!isOpen) {
    setTimeout(() => {
      timelineMsgs.click();
    }, 300);
  }
}
