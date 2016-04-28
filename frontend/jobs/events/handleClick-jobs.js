export default function handleClick(e) {
  // console.log(e);
  e.preventDefault();
  const element = e.currentTarget;
  const attr = element.getAttribute('data-type');
  const id = element.getAttribute('data-id');
  const item = element.parentNode;
  const items = [...item.children];
  const idx = items.indexOf(element);

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

  case 'group-act':
    this.setGroupAction(id);
    break;

  case 'pullDown':
    if (idx + 1 < items.length) this.pullUp(idx, 1);
    break;

  case 'add':
    this.add(element);
    break;

  case 'filter':
    console.log('filter');
    this.filter(id);
    break;

  case 'del':
    this.del(id);
    break;

  case 'sendData':
    this.sendData();
    break;

  case 'addCommentField':
    this.addCommentField(idx);
    break;

  default:
    console.log(attr, 'attr');
  }
}
