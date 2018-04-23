import {action, computed, observable} from "mobx";
import {observer} from "mobx-react";
import React from "react";

import './example.css';

@observer
class Example extends React.Component {
	@observable test1 = 'Reached';
	@observable test2 = 1;

	@computed
	get dependencyCheck() {
		let a = 'Unreached';
		if (this.test2 === 3) {debugger;
			// console.trace();
			a = this.test1;
		}
		return a;
	}

	@action.bound
	changeTest1() {
		this.test1++;
	}

	@action.bound
	changeTest2() {
		this.test2++;
	}

	render() {
		return (
			<div className="container">
				<div className="row">
					<button className="button" onClick={this.changeTest1}>Change Test1</button>
					<button className="button" onClick={this.changeTest2}>Change Test2</button>
				</div>
				<br/>
				<p>
					<span>Reach dependency: - </span>{this.dependencyCheck}
				</p>
			</div>
		)
	}
}

export default Example;