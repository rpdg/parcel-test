import {h, render, Component} from 'preact';
import {observable,  action, computed, configure, runInAction} from 'mobx';
import {inject, observer} from 'mobx-preact';
import styled from 'styled-components';

class Timer {
	@observable
	time :Date = new Date();

	constructor(){
		setInterval(()=>{
			this.setTime();
		} , 1e3)
	}

	@action
	setTime(){
		this.time = new Date();
	}
}


interface IPorps  {
	timer : Timer
}



const Spaner = styled.span`
	background-color: #ddd;
	border-radius: 3em;
	border: 1px solid #ccc;
`;

@observer
class Clock extends Component<IPorps , null> {
	render() {
		const {time} = this.props.timer;
		return <Spaner>{time.toLocaleTimeString()}</Spaner>;
	}
}

// render an instance of Clock into <body>:
render(<Clock timer={new Timer()} />, document.querySelector('#root'));


if (module.hot) {
	module.hot.accept();
}