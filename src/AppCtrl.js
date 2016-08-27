import React from 'react';

const AppControl = (props) => {
  if(!props.gameWinner){
    return (
      <div className="row" id="app-control">
        <div className="col-md-12">
          <h1 id="h1-rps" className="pull-left">RPS</h1>
          <button 
            disabled={props.gameWinner}
            className="pull-right" 
            type="button" 
            onClick={props.choiceHandler.bind(null, 'scissors')}>
            <span><i className="fa fa-hand-scissors-o fa-flip-horizontal fa-2x"></i></span>
          </button>
          <button 
            disabled={props.gameWinner}
            className="pull-right" 
            type="button" 
            onClick={props.choiceHandler.bind(null, 'paper')}>
            <span><i className="fa fa-hand-paper-o fa-rotate-90 fa-2x"></i></span>
          </button>
          <button 
            disabled={props.gameWinner}
            className="pull-right" 
            type="button" 
            onClick={props.choiceHandler.bind(null, 'rock')}>
            <span><i className="fa fa-hand-rock-o fa-rotate-90 fa-2x"></i></span>
          </button>
        </div>
      </div>
    );
  } else {
    return (
      <div className="row" id="app-control">
        <div className="col-md-12">
          <h1 id="h1-rps" className="pull-left">RPS</h1>
          <button 
            className="pull-right" 
            type="button" 
            onClick={props.reset}>
            <span>Play Again?</span>
          </button>
        </div>
      </div>
    );
  }
  
};

export default AppControl;