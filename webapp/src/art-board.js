import Colors from './colors.js'

let ArtBoard = {
  init(options={}) {
    if (options.width) width = options.width;
    if (options.height) height = options.height;
    let artBoardEle = document.querySelectorAll('.art-board')[0];
    artBoardEle.innerHTML = '';
    for (let i = 0; i < height; i++) {
      for (let j = 0; j < width; j++) {
        let blockEle = document.createElement('div');
        blockEle.innerHTML = '&#xa0;&#xa0;'
        blockEle.setAttribute('class', 'block');
        blockEle.setAttribute('data-bg', '#000000');
        blockEle.style.background = '#000000';
        if (j===0) blockEle.style.clear = 'left';
        blockEle.addEventListener('mouseover', handleMouseOver)
        blockEle.addEventListener('mouseleave', handleMouseLeave)
        blockEle.addEventListener('click', handleClick)
        artBoardEle.appendChild(blockEle);
      }
    }
    updateDownloadLink();
  },


  getANSI() {
    let result = '';
    let artBoardEle = document.querySelectorAll('.art-board')[0];
    artBoardEle.childNodes.forEach((blockEle, i) => {
      let bg = blockEle.getAttribute('data-bg');
      let color = Colors.find(c => c.hex === bg);
      result += `\x1b[48;5;${color && color.ansi || 10}m  \x1b[0m`
      if (i > 1 && (i + 1) % width === 0) result += '\n'
    })
    return result;
  },


  setCurrentBGColor(color) {
    currentBGColor = color;
  },
}


let currentBGColor = '#ff0000';
let width = 20;
let height = 20;


let handleMouseOver = function(e) {
  let ele = e.currentTarget;
  ele.style.background = currentBGColor;
  if (e.buttons === 1 || e.buttons === 3) {
    ele.setAttribute('data-bg', currentBGColor)
  }
}


let handleMouseLeave = function(e) {
  let ele = e.currentTarget;
  ele.style.background = ele.getAttribute('data-bg') || '#000';
}


let handleClick = function(e) {
  let ele = e.currentTarget;
  ele.setAttribute('data-bg', currentBGColor);
  updateDownloadLink();
}

let updateDownloadLink = function() {
  let download = document.getElementById('download');
  let href = 'data:text/plain;charset=utf-8,';
  href += encodeURIComponent(ArtBoard.getANSI());
  console.log(href);
  download.setAttribute('href', href);
}

export default ArtBoard;
