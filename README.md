#### ANSI ART

Create ANSI art and render it with speech bubbles inside node.

https://gauravchl.github.io/ansi-art/webapp/

<img width="510" alt="screen shot 2017-04-25 at 11 51 53 am" src="https://cloud.githubusercontent.com/assets/3471415/25371301/b440ebe6-29ad-11e7-8459-abbea63e1630.png">


**Steps:**
1. Create and download the ANSI art from webapp: https://gauravchl.github.io/ansi-art/webapp/
2. Install `npm install ansi-art ` package to render the downloaded art file.

3. You can also render the pre-made art files in '/src/arts/'.


**Examples:**

```
// Using existing art
import ANSI from 'ansi-art';
let mario = ANSI.get({artName: 'mario'});
console.log(mario);

```


```
// Using custom art file
import ANSI from 'ansi-art';
let art = ANSI.get({filePath: '~/desktop/custom-art.ansi'})
console.log(art);
```

```
// Using Speech bubble
import ANSI from 'ansi-art';
let art = ANSI.get({artName: 'mario', speechText: 'Hello world'}
console.log(art);

```

**ANSI.get(options):**

Parameter | Type | Description
------|------ | -------------
options.filePath | string | Path to custom ANSI art file(eg: ~/mario.ansi)
options.artName | string |  Name of existing ANSI art available within package.[See available arts](https://github.com/gauravchl/ansi-art/blob/master/src/arts/)
options.speechText | string | If provided, render the text inside 'speech bubble' above the ANSI art





<img width="242" alt="screen shot 2017-05-14 at 4 57 37 pm" src="https://cloud.githubusercontent.com/assets/3471415/26033277/97663dc8-38c6-11e7-88d3-3d4534642ef4.png">


Mario credits: https://github.com/acarl005/node-super-mario

Parrot credits: https://github.com/matheuss/parrotsay-api

**Contributing**

Please feel free to submit any bugs or suggestions as issues or request to add any art into existing collections. Pull requests are welcome.
