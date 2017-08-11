import colors from './colors';

let pickerElement = null;

function handleClickOnColorPicker(e, cb) {
  const htmlElement = e.currentTarget;
  htmlElement.parentElement.childNodes.forEach(node => node.removeAttribute('active'));
  htmlElement.setAttribute('active', '');
  if (cb) cb(htmlElement.getAttribute('data-bg'));
}

const ColorPicker = {
  init(options) {
    if (!options.pickerElement) return;

    pickerElement = options.pickerElement;

    colors.forEach((color) => {
      const div = document.createElement('div');
      div.setAttribute('data-bg', color.hex);
      div.style.background = color.hex;
      div.addEventListener('click', (e) => {
        handleClickOnColorPicker(e, options.onColorChange);
      });
      pickerElement.appendChild(div);
    });
  },
};


export default ColorPicker;
