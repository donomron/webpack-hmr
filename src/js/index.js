import 'css/style.css';
import foo from './foo.js';
import './btn';

foo();

if(module.hot){
	module.hot.accept();
}