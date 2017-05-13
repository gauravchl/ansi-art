import colors from './colors';
import ArtBoard from './art-board';


ArtBoard.init({ width: 32, height: 32 });


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
  ArtBoard.setCurrentBGColor(ele.getAttribute('data-bg'));
}


var getCurrentColor = function(pickerElement) {
  if (!pickerElement) return;
  let ele = pickerElement.querySelectorAll('div[active]');
  if (!ele.length) return;
  return ele[0].getAttribute('data-bg');
}


initColorPicker(document.querySelectorAll('.color-picker')[0]);
