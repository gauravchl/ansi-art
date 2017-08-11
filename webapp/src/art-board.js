import colors from './colors';

let currentBGColor = '#ff0000';
let width = 20;
let height = 20;


function handleMouseOver(e) {
  const htmlElement = e.currentTarget;
  htmlElement.style.background = currentBGColor;

  if (e.buttons === 1 || e.buttons === 3) {
    htmlElement.setAttribute('data-bg', currentBGColor);
  }
}

function handleMouseLeave(e) {
  const htmlElement = e.currentTarget;
  htmlElement.style.background = htmlElement.getAttribute('data-bg') || '#000';
}


const ArtBoard = {
  updateDownloadLink() {
    const download = document.getElementById('download');
    let href = 'data:text/plain;charset=utf-8,';
    href += encodeURIComponent(ArtBoard.getANSI());
    download.setAttribute('href', href);
  },

  handleClick(e) {
    const htmlElement = e.currentTarget;
    htmlElement.setAttribute('data-bg', currentBGColor);
    ArtBoard.updateDownloadLink();
  },

  init(options = {}) {
    if (options.width) width = options.width;
    if (options.height) height = options.height;

    const bgColorsArray = options.bgColorsArray;
    const artBoardEle = document.querySelectorAll('.art-board')[0];
    artBoardEle.innerHTML = '';

    for (let i = 0; i < height; i += 1) {
      for (let j = 0; j < width; j += 1) {
        const blockEle = document.createElement('div');
        const ansiColor = (bgColorsArray && bgColorsArray[i] && bgColorsArray[i][j]) || '00';
        const color = colors.find(c => c.ansi === ansiColor);

        blockEle.innerHTML = '&#xa0;&#xa0;';
        blockEle.setAttribute('class', 'block');
        blockEle.setAttribute('data-bg', color && color.hex);
        blockEle.style.background = color && color.hex;

        if (j === 0) blockEle.style.clear = 'left';

        blockEle.addEventListener('mouseover', handleMouseOver);
        blockEle.addEventListener('mouseleave', handleMouseLeave);
        blockEle.addEventListener('click', ArtBoard.handleClick);
        artBoardEle.appendChild(blockEle);
      }
    }

    this.updateDownloadLink();
  },

  getANSI() {
    let result = '';

    const artBoardEle = document.querySelectorAll('.art-board')[0];
    artBoardEle.childNodes.forEach((blockEle, i) => {
      const bg = blockEle.getAttribute('data-bg');
      const color = colors.find(c => c.hex === bg);
      result += `\x1b[48;5;${(color && color.ansi) || 10}m  \x1b[0m`;
      if (i > 1 && (i + 1) % width === 0) result += '\n';
    });

    return result;
  },

  loadANSI(content = '') {
    const trimmedContent = content.trim();

    if (!trimmedContent) return;
    let lines = trimmedContent.split('\n');

    lines = lines.map((line) => {
      let newLine = line.split(/\[48;5;(.*?)\[0m/);
      newLine = newLine && newLine.filter(s => s.indexOf('m') > -1);
      newLine = newLine.map(s => s.substring(0, s.indexOf('m')));
      return newLine;
    });

    const options = {
      width: lines && lines[0] && lines[0].length,
      height: lines && lines.length,
      bgColorsArray: lines,
    };

    ArtBoard.init(options);
  },

  setCurrentBGColor(color) {
    currentBGColor = color;
  },
};


export default ArtBoard;
