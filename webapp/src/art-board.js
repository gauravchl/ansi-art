

let ArtBoard = {
  init(options) {
    let {width=20, height=20} = options || {};
    let artBoardEle = document.querySelectorAll('.art-board')[0];
    artBoardEle.innerHTML = '';
    for (let i = 0; i < height; i++) {
      for (let j = 0; j < width; j++) {
        let blockEle = document.createElement("div");
        blockEle.innerHTML = '&#xa0;&#xa0;&#xa0;&#xa0;'
        blockEle.setAttribute('class', 'block');
        blockEle.setAttribute('data-bg', '#000');
        blockEle.style.background = '#000';
        if (j===0) blockEle.style.clear = 'left';
        blockEle.addEventListener('mouseover', handleMouseOver)
        blockEle.addEventListener('mouseleave', handleMouseLeave)
        blockEle.addEventListener('click', handleClick)
        artBoardEle.appendChild(blockEle);
      }
    }
  },


  setCurrentBGColor(color) {
    currentBGColor = color;
  },
}


let currentBGColor = '#ff0000';


let handleMouseOver = function(e) {
  let ele = e.currentTarget;
  ele.style.background = currentBGColor;
  if (e.buttons == 1 || e.buttons == 3) {
    ele.setAttribute('data-bg', currentBGColor)
  }
}


let handleMouseLeave = function(e) {
  let ele = e.currentTarget;
  ele.style.background = ele.getAttribute('data-bg') || '#000';
}


let handleClick = function(e) {
  let ele = e.currentTarget;
  ele.setAttribute('data-bg', currentBGColor)
}


export default ArtBoard;
