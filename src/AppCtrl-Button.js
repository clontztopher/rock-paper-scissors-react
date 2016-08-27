import React, { Component } from 'react';

export default class Button extends Component{
  render() {
    return (
      <button 
        className="pull-right" 
        type="button" 
        onClick={this.props.choiceHandler.bind(null, this.props.type)}>
        <span><i className={this.props.icon}></i></span>
      </button>
    )
  }
}