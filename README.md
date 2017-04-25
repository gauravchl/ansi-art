#### ANSI ART

Create ANSI art using simple texts

<img width="510" alt="screen shot 2017-04-25 at 11 51 53 am" src="https://cloud.githubusercontent.com/assets/3471415/25371301/b440ebe6-29ad-11e7-8459-abbea63e1630.png">


**Example:**

```
import ANSI from 'ansi-art';

const mario = `
.....rrrrr..yyy.
....rrrrrrrrryy.
....oooyyxy.rrr.
...oyoyyyxyyyrr.
...oyooyyyoyyyr.
...ooyyyyoooor..
.....yyyyyyyrr..
..rrrrbrrrbrr..o
yyrrrrrbrrrb..oo
yyyrrrrbbbbYbboo
.y..brbbYbbbbboo
..ooobbbbbbbbboo
.ooobbbbbb......
.oo.............
`

let mario = ANSI.get(mario);

console.log(mario);

```

**ANSI.get(text, options):**

Parameter | Type | Description
------|------ | -------------
text    | string | Text to be converted into ANSI, Characters inside text represents the color. r for red, b for blue, '.' for transparent., [See available colors](https://github.com/gauravchl/ansi-art/blob/master/src/index.js#L5):
options | object | More options for ansi art
options.speak | string | If provided, render the text inside 'speech bubble' above the ANSI art


You can also import existing arts available inside '/src/arts/'

**Example with existing art:**

```
import ANSI, { MarioArt } from 'ansi-art';

console.log(ANSI.get(MarioArt));
```

**Example with speech bubble:**

```
import ANSI, { MarioArt } from 'ansi-art';

console.log(ANSI.get(MarioArt, {speak: 'Hello World'}));
```

<img width="375" alt="screen shot 2017-04-25 at 12 45 50 pm" src="https://cloud.githubusercontent.com/assets/3471415/25372927/2b153fa4-29b5-11e7-97ab-dbcfecbc5e28.png">
