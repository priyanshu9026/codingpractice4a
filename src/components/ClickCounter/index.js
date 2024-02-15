import {Component} from 'react'

import './index.css'

class ClickCounter extends Component {
  state = {count: 0}
  onIncrement = () => {
    this.setState(prevstate => {
      console.log(`pre${prevstate.count}`)
      return {count: prevstate.count + 1}
    })
  }
  render() {
    const {count} = this.state
    return (
      <div className="container">
        <h1 className="heading">
          The Button has been clicked <span className="spn">{count} </span>{' '}
          times
        </h1>
        <p className="para">Click the button to increase the count!</p>
        <div>
          <button onClick={this.onIncrement} className="button">
            Click Me!
          </button>
        </div>
      </div>
    )
  }
}
export default ClickCounter
