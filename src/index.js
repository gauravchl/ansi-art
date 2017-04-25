const colors = {
  o: '[48;5;95m',   // orange/brown
  r: '[48;5;9m',    // red
  x: '[48;5;0m',    // black
  b: '[48;5;33m',   // blue
  Y: '[48;5;11m',   // yello/bright
  '.': '[m'        // transparent
}


let getANSIFromArt = function(art) {
  let artArray = art && art.trim() && art.trim().split('\n');
  if (!artArray || !artArray.length) return;
  return artArray.map(row => {
    return row.split('').map(item => `\x1b${colors[item]}  \x1b[0m`).join('');
  }).join('\n');
}


export default { getANSIFromArt }
