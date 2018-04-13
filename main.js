import './vendor' ;


import sayHello from  './common';
import {str} from  './util';




import('./app').then(() => {
	document.getElementById('root').innerText = 'successfully loaded app';
	sayHello(str.pad('success'));
}).catch((error) => {
	console.error(error);
});
