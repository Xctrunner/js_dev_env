import './index.css';

import * as numeral from 'numeral';

const courseValue = numeral(1000).format('$0,0.00');
console.log(`I would pay ${courseValue} fro this awesome course!`);
