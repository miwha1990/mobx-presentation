import {action, computed, observable} from "mobx";
import {observer} from "mobx-react";
import React from "react";

import './example.css';

@observer
class Example extends React.Component {
	@observable test1 = 1;

	@computed
	get randomVal() {
		// console.log(this.test1);
		console.trace();
		return Math.random();
	}

	@action.bound
	changeTest1() {
		this.test1++;
	}

	@computed
	get computedRandomVal() {
		return Math.round(this.randomVal);
	}

	render() {
		return (
			<div className="container">
				<div className="row">
					<button className="button" onClick={this.changeTest1}>Change Test1</button>
				</div>
				<br/>
				<p>
					<span>Computed RandomVal call: - </span>{this.randomVal}
				</p>
				<p>
					<span>Computed ComputedRandomVal call: - </span>{this.computedRandomVal}
				</p>
			</div>
		)
	}
}

export default Example;