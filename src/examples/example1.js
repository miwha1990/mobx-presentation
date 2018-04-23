import {action, computed, observable, spy} from "mobx";
import DevTools from 'mobx-react-devtools';
import {observer} from "mobx-react";
import React from "react";

import './example.css';

spy((event) => {
	console.log(event)
});

@observer
class Example extends React.Component {
	@observable test1 = 1;
	@observable test2 = 1;
	@observable test3 = 1;

	@computed
	get summarize() {
		return this.test1 + this.test2;
	}

	changeTest2() {
		this.test2 = Math.random();
	}

	@action.bound
	changeTest1() {
		this.test1++;
	}

	@action.bound
	changeTest3() {
		this.test3++;
	}

	render() {
		return (
			<div className="container">
				<div className="row">
					<button className="button" onClick={this.changeTest1}>Change Test1</button>
					<button className="button" onClick={this.changeTest3}>Change Test3</button>
					<button className="button" onClick={() => this.changeTest2()}>Change Test2</button>
				</div>
				<br/>
				<p>Test1 = {this.test1}</p>
				<p>Test2 = {this.test2}</p>
				<p>Test3 = {this.test3}</p>
				<p>
					<span className="text">Test1 + Test2 = </span>{this.summarize}
				</p>
				<br/>
				<p>
					<span className="text">Test1 + Test2 = </span>{this.summarize}
				</p>
				<DevTools/>
			</div>
		)
	}
}

export default Example;