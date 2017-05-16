import Colors from './colors.js'

let ArtBoard = {
  init(options={}) {
    if (options.width) width = options.width;
    if (options.height) height = options.height;
    let bgColorsArray = options.bgColorsArray;
    let artBoardEle = document.querySelectorAll('.art-board')[0];
    artBoardEle.innerHTML = '';
    for (let i = 0; i < height; i++) {
      for (let j = 0; j < width; j++) {
        let blockEle = document.createElement('div');
        let ansiColor = bgColorsArray && bgColorsArray[i] && bgColorsArray[i][j] || '00'
        let color = Colors.find(c => c.ansi === ansiColor)

        blockEle.innerHTML = '&#xa0;&#xa0;'
        blockEle.setAttribute('class', 'block');
        blockEle.setAttribute('data-bg', color && color.hex);
        blockEle.style.background = color && color.hex;
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


  loadANSI(content='') {
    content = content.trim()
    if (!content) return;
    let lines = content.split('\n')

    lines = lines.map(line => {
      let newLine = line.split(/\[48;5;(.*?)\[0m/);
      newLine = newLine && newLine.filter(s => s.indexOf('m') > -1);
      newLine = newLine.map(s => s.substring(0, s.indexOf('m')));
      return newLine;
    })

    let options = {
      width: lines && lines[0] && lines[0].length,
      height: lines && lines.length,
      bgColorsArray: lines,
    }
    ArtBoard.init(options);
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
  download.setAttribute('href', href);
}

export default ArtBoard;
