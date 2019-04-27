import React, { Component } from 'react';
import './App.css';
import './prism.css';

let sumOfThreeFive = (maxVal)=>{
  const nums = [3,5,6,9,10,12,15],
        div = Math.floor(maxVal / 15),
        mod = maxVal % 15;

  let   sum = 0;

  for(let i = 1; i < div + 1; i++) {
      sum += (i * 60);
  }

  for(let i = 0; i < nums.length; i++) {
    if(nums[i] <= mod) {
      sum += nums[i];
    }
    else {
      break;
    }
  }

  return sum;
}

class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      number: 5
    };
  }

  render() {
    return (
      <div className="App">
        <input type="string" value={this.state.number} onChange={(event) => {this.setState({number: event.target.value})}}></input>
        <p>{sumOfThreeFive(this.state.number)}</p>
        <pre className="language-js">
          <code className="language-js">
{`(maxVal)=>{
  const nums = [3,5,6,9,10,12,15]
        div = Math.floor(top / 15),
        mod = top % 15;

  let   sum = 0;

  for(let i = 1; i < div + 1; i++) {
      sum += (i * 60);
  }

  for(let i = 0; i < nums.length; i++) {
    if(nums[i] <= mod) {
      sum += nums[i];
    }
    else {
      break;
    }
  }

  return sum;
}`}
          </code>
        </pre>
      </div>
    );
  }
}

export default App;
