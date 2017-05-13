import colors from './colors';



var handleMouseOver = function(e) {
  let ele = e.currentTarget;
  ele.style.background = getCurrentColor(document.querySelectorAll('.color-picker')[0]);
  if (e.buttons == 1 || e.buttons == 3) {
    ele.setAttribute('data-bg', getCurrentColor(document.querySelectorAll('.color-picker')[0]))
  }
}

var handleMouseLeave = function(e) {
  let ele = e.currentTarget;
  ele.style.background = ele.getAttribute('data-bg') || '#000';
}

var handleClick = function(e) {
  let ele = e.currentTarget;
  ele.setAttribute('data-bg', getCurrentColor(document.querySelectorAll('.color-picker')[0]))
}

var blocks = document.querySelectorAll('.block')

blocks.forEach(node => node.addEventListener('mouseover', handleMouseOver))
blocks.forEach(node => node.addEventListener('mouseleave', handleMouseLeave))
blocks.forEach(node => node.addEventListener('click', handleClick))




var initColorPicker = function(pickerElement) {
  if (!pickerElement) return;
  colors.forEach( color => {
    let div = document.createElement("div");
    div.setAttribute('data-bg', color.hex);
    div.style.background = color.hex;
    div.addEventListener('click', handleClickOnColorPicker)
    pickerElement.appendChild(div);
  })
}

var handleClickOnColorPicker = function(e) {
  let ele = e.currentTarget;
  ele.parentElement.childNodes.forEach(node => node.removeAttribute('active'))
  ele.setAttribute('active', '');
}

var getCurrentColor = function(pickerElement) {
  if (!pickerElement) return;
  let ele = pickerElement.querySelectorAll('div[active]');
  if (!ele.length) return;
  return ele[0].getAttribute('data-bg');
}

initColorPicker(document.querySelectorAll('.color-picker')[0]);
