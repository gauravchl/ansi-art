'use-strict';

const fs = require('fs');
const arts = require('./arts');
const chatBubble = require('node-chat-bubble');


function get(options) {
  const { artName, filePath, speechText, speechBubbleOptions } = options || {};
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

  if (speechText) result = `${chatBubble.get(speechText, speechBubbleOptions)} \n ${result}`;
  return result;
}


module.exports = { get, default: { get } };
