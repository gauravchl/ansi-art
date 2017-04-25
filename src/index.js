import MarioArt from './arts/mario.js';


// More colors: https://en.wikipedia.org/wiki/ANSI_escape_code
const colors = {
  r: '[48;5;9m',    // red
  b: '[48;5;12m',   // blue
  g: '[48;5;10m',   // green
  x: '[48;5;0m',    // black
  w: '[48;5;15m',   // white
  o: '[48;5;95m',   // orange/brown
  y: '[48;5;224m',  // yellow/peach
  Y: '[48;5;11m',   // yello/bright
  '.': '[m'         // transparent
}



let getSpeechBubble = function(text) {
  let lines = `+${'-'.repeat(text.length + 2)}+ \n| ${text} |\n+${'-'.repeat(text.length + 2)}+\n`
  lines += '     \\\n      \\\n';
  return lines
}


// options.speak: string, Shows it inside 'speak bubble'

let get = function(art, options={}) {
  let artArray = art && art.trim() && art.trim().split('\n');
  if (!artArray || !artArray.length) return;
  let { speak } = options;

  let result = artArray.map(row => {
    return row.split('').map(item => `\x1b${colors[item]}  \x1b[0m`).join('');
  }).join('\n');

  if (speak) result = getSpeechBubble(speak) + result;
  return result;
}


export default { get }

export { MarioArt }
