import Mario from './arts/mario.ansi';
import Minions from './arts/minions.ansi';
import Parrot from './arts/parrot.ansi';
import Ironman from './arts/ironman.ansi';
import fs from 'fs';


let Arts = [
  { name: 'mario',   path: __dirname + Mario },
  { name: 'minions', path: __dirname + Minions },
  { name: 'parrot', path: __dirname + Parrot },
  { name: 'ironman', path: __dirname + Ironman }
]


let getSpeechBubble = function(text) {
  let lines = `+${'-'.repeat(text.length + 2)}+ \n| ${text} |\n+${'-'.repeat(text.length + 2)}+\n`
  lines += '     \\\n      \\\n';
  return lines
}


let get = function(options) {
  let { artName, filePath, speechText } = options || {};
  let result = '';

  if (filePath) {
    if (!fs.existsSync(filePath)) return `Art file not found!${filePath}`;
    result = fs.readFileSync(filePath, 'utf8');
  } else if (artName) {
    let art = Arts.find(item => item.name === artName);
    if (!art) return 'Art not found';
    result = fs.readFileSync(art.path, 'utf8');
  } else {
    return 'artName or filePath required.'
  }

  if (speechText) result = getSpeechBubble(speechText) + result;
  return result;
}


export default { get }
