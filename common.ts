
const sayHello = function (str :string = 'hello') :void {
	console.log(str);
};

sayHello('common.js');

export { sayHello };
export default sayHello;