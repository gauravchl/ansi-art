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

Characters inside text represents the color. r for red, b for blue, '.' for transparent.

You can also import existing Arts available inside '/src/arts/'

Example:

```
import ANSI, { MarioArt } from 'ansi-art';

console.log(ANSI.get(MarioArt));
```


TODO:

- Add option to display text inside speech bubble.
