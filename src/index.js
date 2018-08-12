import _ from 'lodash';
import './style.css';
import MyImage from './webpack_logo.svg';

function component(){
	let element = document.createElement('div');
	element.innerHTML = _.join(['Hello', 'webpack'], ' ');
	element.classList.add('hello');
	var myLogo = new Image();
	myLogo.src = MyImage;
	element.appendChild(myLogo);
	return element;
}

document.body.appendChild(component());
