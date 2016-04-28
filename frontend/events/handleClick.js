export default function handleClick(e) {
  e.preventDefault();
  const element = e.currentTarget;
  const attr = element.getAttribute('data-type');
  const item = element.parentNode.parentNode;
  const items = [...item.parentNode.children];
  const idx = items.indexOf(item);

  // console.log(items);
  // console.log(item);
  // console.log(attr);
  // console.log(idx);
  switch (attr) {

  case 'edit':
    this.edit(idx);
    break;

  case 'pullUp':
    if (idx > 0) this.pullUp(idx, -1);
    break;

  case 'pullDown':
    if (idx + 1 < items.length) this.pullUp(idx, 1);
    break;

  case 'add':
    this.add(element);
    break;

  case 'del':
    this.del(idx);
    break;

  case 'sendData':
    this.sendData();
    break;

    case 'addCommentField':
    this.addCommentField(field);
    break;

  default:
    console.log(attr, 'attr');
  }
}
