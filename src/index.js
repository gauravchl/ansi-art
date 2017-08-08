import fs from 'fs';
import arts from './arts';

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


export default { get };
