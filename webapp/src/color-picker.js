import colors from './colors';

let ColorPicker = {
  init(options) {
    if (!options.pickerElement) return;
    pickerElement = options.pickerElement;
    colors.forEach(color => {
      let div = document.createElement('div');
      div.setAttribute('data-bg', color.hex);
      div.style.background = color.hex;
      div.addEventListener('click', function(e){ handleClickOnColorPicker(e, options.onColorChange) })
      pickerElement.appendChild(div);
    })
  }
}

let pickerElement = null;

let handleClickOnColorPicker = function(e, cb) {
  let ele = e.currentTarget;
  ele.parentElement.childNodes.forEach(node => node.removeAttribute('active'))
  ele.setAttribute('active', '');
  if (cb) cb(ele.getAttribute('data-bg'));
}


let getCurrentColor = function(pickerElement) {
  if (!pickerElement) return;
  let ele = pickerElement.querySelectorAll('div[active]');
  if (!ele.length) return;
  return ele[0].getAttribute('data-bg');
}

export default ColorPicker;
