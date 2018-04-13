import './vendor' ;

import styled from 'styled-elements';
import sayHello from  './common';
import {str} from  './util';

const Header = styled.h2`
  color: #333;
`;



const MyButton = styled.button`
  padding: 10px;
  border-radius: ${0}px;
  background: #F1F1F1;

  &:hover {
    background: #555;
  }
`;

const Wrapper = styled.div`
  width: 500px;
  border: 1px solid #aaa;

  @media (min-width: 400px) {
    width: 100%;
    background: #F1F1F1;
  }
`;



document.body.appendChild(Wrapper(
	Header('My header!'),
	MyButton({ onclick: () => console.log('yay!') },
		'Do Something',
		'Say Something Else'
	)
));



import('./app').then(() => {
	document.getElementById('root').innerText = 'successfully loaded app tds';
	sayHello(str.pad('success'));
}).catch((error) => {
	console.error(error);
});
