import './index.css'
import {Component} from 'react'

class LettersCalculator extends Component {
  state = {searchInput: ''}

  onSearchInput = event => {
    const searchValue = event.target.value
    this.setState({
      searchInput: searchValue,
    })
  }

  render() {
    const {searchInput} = this.state
    const count = searchInput.length
    return (
      <div className="app-container">
        <div className="content-container">
          <div className="text-container">
            <h1 className="caption">Calculate the Letters you enter</h1>
            <label className="label-text" htmlFor="userInput">
              Enter the phrase
            </label>
            <input
              id="userInput"
              className="user-input"
              type="text"
              placeholder="Enter the phrase"
              value={searchInput}
              onChange={this.onSearchInput}
            />
            <p className="output">No.of letters: {count}</p>
          </div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png "
            alt="letters calculator"
            className="image"
          />
        </div>
      </div>
    )
  }
}

export default LettersCalculator
