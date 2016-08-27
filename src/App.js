import React, { Component } from 'react';
import AppControl from './AppCtrl';
import Scoreboard from './ScoreBoard';
import Stage from './Stage';

export default class RPSApp extends Component{
   constructor(){
    super();
    this.initialState = {
      userChoice: 'rock',
      computerChoice: 'rock',
      userScore: 0,
      computerScore: 0,
      currentWinner: null,
      gameWinner: null
    }
    this.state = Object.assign({}, this.initialState, {
      gamesWon: {
        user: null,
        computer: null
      }
    })
    this.handleChoice = this.handleChoice.bind(this);
    this.reset = this.reset.bind(this);
   }

  handleChoice(userChosen){
    let computerChosen = this.computerChoice();
    this.setState({ userChoice: userChosen, computerChoice: computerChosen });
    this.saveResults(this.selectWinner(userChosen, computerChosen));
  }

  computerChoice(){
    var result = Math.floor(Math.random() * 9);
    if (result >= 0 && result < 3) return "rock";
    else if (result >= 3 && result < 6) return "paper";
    else return "scissors";
  }

  selectWinner(userChosen, computerChosen){
    if (userChosen === computerChosen) return 'draw';
    else if (
      userChosen === "rock" && computerChosen === "paper" ||
      userChosen === "paper" && computerChosen === "scissors" ||
      userChosen === "scissors" && computerChosen === "rock"
    ) {
      return 'computer';
    }
    else {
      return 'user';
    }
  }

  checkGameWinner(userScore, computerScore) {
    let winningScore = this.props.winningScore;

    if(userScore === winningScore){
      this.setState({ gameWinner:'user' });
    } else if (computerScore === winningScore){
      this.setState({ gameWinner:'computer' });
    }
  }

  saveResults(winner){
    if(winner === 'user'){
      var userScore = this.state.userScore + 1;
      this.setState({ currentWinner: 'user', userScore: userScore });
    } else if (winner === 'computer') {
      var computerScore = this.state.computerScore + 1;
      this.setState({ currentWinner: 'computer', computerScore: computerScore });
    } else {
      this.setState({ currentWinner: 'draw' });
    }
    this.checkGameWinner(userScore, computerScore);
  }

  reset() {
    this.setState(this.initialState);
    
  }

  render() {

    return (
      <div className="template container">
        <AppControl 
          choiceHandler={this.handleChoice} 
          gameWinner={this.state.gameWinner} 
          reset={this.reset}
        />
        <Scoreboard 
          userScore={this.state.userScore} 
          computerScore={this.state.computerScore} 
          currentWinner={this.state.currentWinner} 
          gameWinner={this.state.gameWinner}
        />
        <Stage 
          userChoice={this.state.userChoice} 
          computerChoice={this.state.computerChoice} 
        />
      </div>
    );
  }
}
