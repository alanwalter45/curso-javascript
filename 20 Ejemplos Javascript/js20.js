const rxjs = require('rxjs');
const {take} = require('rxjs/operators');

let t = rxjs.interval(2000).pipe(take(10));
t.subscribe(data=>console.log(data));
