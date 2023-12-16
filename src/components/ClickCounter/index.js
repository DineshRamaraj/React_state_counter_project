// Write your code here
import {Component} from 'react'
import './index.css'

class MyComponent extends Component {
  state = {count: 0}

  onIncrement = () => {
    console.log('You Clicked button')
    this.setState(previousValue => ({count: previousValue.count + 1}))
  }

  render() {
    const {count} = this.state
    return (
      <div className="card-container">
        <h1 className="heading">
          The Button has been clicked <span className="counter">{count}</span>{' '}
          times
        </h1>
        <p className="description">Click the button to increase the count!</p>
        <button className="button" type="button" onClick={this.onIncrement}>
          Click Me!
        </button>
      </div>
    )
  }
}
export default MyComponent
