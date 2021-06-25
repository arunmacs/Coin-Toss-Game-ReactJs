import {Component} from 'react'
import './index.css'

const tossImages = {
  heads: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
  tails: 'https://assets.ccbp.in/frontend/react-js/tails-img.png',
}

class CoinToss extends Component {
  state = {headsCount: 0, tailsCount: 0, tossImage: tossImages.heads}

  tossCoin = () => {
    const tossResult = Math.floor(Math.random() * 2)
    if (tossResult === 0) {
      this.setState(prev => ({
        headsCount: prev.headsCount + 1,
        tossImage: tossImages.heads,
      }))
    } else {
      this.setState(prev => ({
        tailsCount: prev.tailsCount + 1,
        tossImage: tossImages.tails,
      }))
    }
  }

  render() {
    const {headsCount, tailsCount, tossImage} = this.state
    return (
      <div className="container">
        <div className="content-div">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="heads-tails-text">Heads (or) Tails </p>
          <div className="coin-image-div">
            <img src={tossImage} alt="toss result" />
          </div>
          <button type="button" onClick={this.tossCoin}>
            Toss Coin
          </button>
          <div className="result-div">
            <p className="total-count">Total: {headsCount + tailsCount}</p>
            <p className="heads-count">Heads: {headsCount}</p>
            <p className="tails-count">Tails: {tailsCount}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
