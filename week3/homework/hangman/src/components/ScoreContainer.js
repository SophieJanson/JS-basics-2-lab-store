import * as React from 'react'
import * as gameLogic from '../lib/game'
import Score from './Score'
import { connect } from 'react-redux'


class ScoreContainer extends React.PureComponent {
  getWrongGuesses = () => {
    return gameLogic.wrongGuessCount(this.props.randomWord, this.props.guesses)
  }

  render() {
    if (this.props.guesses.length === 0) return 'Make your first guess and be awesome'
    return <Score wrongGuessCount={this.getWrongGuesses()} guesses={this.props.guesses}/>
  }
}

const setStateToProps = (state) => {
  return {
    state,
    randomWord: state.game.randomWord,
    guesses: state.game.guesses
  }
}

export default connect(setStateToProps)(ScoreContainer)
