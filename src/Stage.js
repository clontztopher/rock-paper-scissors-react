import React, { Component } from 'react';

export default class Stage extends Component{
  userIcons(choice){
    switch(choice){
      case 'rock':
      return <i className="fa fa-hand-rock-o fa-5x fa-rotate-90"></i>;
      break;
      case 'paper':
      return <i className="fa fa-hand-paper-o fa-5x fa-rotate-90"></i>;
      break;
      case 'scissors':
      return <i className="fa fa-hand-scissors-o fa-5x fa-flip-horizontal"></i>;
    }
  }
  computerIcons(choice){
    switch(choice){
      case 'rock':
      return <i className="fa fa-hand-rock-o fa-5x fa-rotate-270"></i>;
      break;
      case 'paper':
      return <i className="fa fa-hand-paper-o fa-5x fa-rotate-270"></i>;
      break;
      case 'scissors':
      return <i className="fa fa-hand-scissors-o fa-5x"></i>;
    }
  }
  render(){
    return (
      <div id="stage" className="row">
        <div className="col-xs-6">
          <div className="user box">
            {this.userIcons(this.props.userChoice)}
          </div>
        </div>
        <div className="col-xs-6">
          <div className="computer box">
            {this.computerIcons(this.props.computerChoice)}
          </div>
        </div>
      </div>
    );
  }
}