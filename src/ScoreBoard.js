import React, { Component } from 'react';

export default class Scoreboard extends Component{
  render(){

    let user = false, 
        computer = false, 
        winner = this.props.currentWinner,
        gameWinner = this.props.gameWinner,
        message = 'Ready?';

    if (gameWinner === 'user') {
      message = 'User Wins!'
    } else if (gameWinner === 'computer') {
      message = 'User Loses!';
    } else {
      if(winner == 'user'){
        user = true;
        message = 'Win!';
      } else if (winner == 'computer'){
        computer = true;
        message = 'Lose';
      } else if (winner == 'draw'){
        message = "Draw";
      }
    }

    return (
      <div id="scoreboard" className="row">
        <div className="col-xs-3">
          <div className={"score " + (user ? "score__winner" : "")}>
            <p><span>Score:</span></p>
            <p><span id="player-points" className="points">{this.props.userScore}</span></p>
          </div>
        </div>
        <div className="col-xs-6">
          <p id="message" className={gameWinner ? "game__winner" : ""}>{message}</p>
        </div>
        <div className="col-xs-3">
          <div className={"score " + (computer ? "score__winner" : "")}>
            <p><span>Score:</span></p>
            <p><span id="computer-points" className="points">{this.props.computerScore}</span></p>
          </div>
        </div>
      </div>
    );
  }
}