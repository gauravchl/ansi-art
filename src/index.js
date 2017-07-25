const fs = require('fs');
const arts = require('./arts');

// const path = require('path');
// const arts = [
//   {
//     name: 'mario',
//     path: path.resolve(__dirname, 'arts/mario.ansi'),
//   },
//   {
//     name: 'minions',
//     path: path.resolve(__dirname, 'arts/minions.ansi'),
//   },
//   {
//     name: 'parrot',
//     path: path.resolve(__dirname, 'arts/parrot.ansi'),
//   },
//   {
//     name: 'ironman',
//     path: path.resolve(__dirname, 'arts/ironman.ansi'),
//   },
//   {
//     name: 'panda',
//     path: path.resolve(__dirname, 'arts/panda.ansi'),
//   },
//   {
//     name: 'link',
//     path: path.resolve(__dirname, 'arts/link.ansi'),
//   },
// ];


function getSpeechBubble(text) {
  const dashes = '-'.repeat(text.length + 2);

  let lines = `+${dashes}+ \n| ${text} |\n+${dashes}+\n`;
  lines += '     \\\n      \\\n';

  return lines;
}


function get(options) {
  const { artName, filePath, speechText } = options || {};
  let result = '';

  if (filePath) {
    if (!fs.existsSync(filePath)) return `Art file not found! ${filePath}`;
    result = fs.readFileSync(filePath, 'utf8');
  } else if (artName) {
    const art = arts.find(item => item.name === artName);
    if (!art) return 'Art not found';
    result = fs.readFileSync(art.path, 'utf8');
  } else {
    return 'artName or filePath required.';
  }

  if (speechText) result = getSpeechBubble(speechText) + result;

  return result;
}


module.exports.get = get;
