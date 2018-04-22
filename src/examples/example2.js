import { observable, computed, action } from "mobx";
import { observer } from "mobx-react";
import React from "react";

import './example.css';

@observer
class Example extends React.Component {
  @observable test1 = 1;
  @observable test3 = 1;

  @computed
  get randomVal() {
    // console.log(this.test1);
    return Math.random();
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
        </div>
        <br />
        <br />
        <p>
          <span>First call: - </span>{this.randomVal}
        </p>
        <br />
        <p>
          <span>Second call: - </span>{this.randomVal}
        </p>
      </div>
    )
  }
}

export default Example;