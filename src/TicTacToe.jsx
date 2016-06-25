import React from 'react';

import {Row} from './Row.jsx';
import {InvalidMove} from './InvalidMove.jsx';
console.log('row',Row);
console.log(InvalidMove);

export default class TicTacToe extends React.Component {

  constructor(props) {
    super(props);
    this.defaultBoard = [ ['','',''],
                          ['','',''],
                          ['','',''] ];
    this.state = {
      board: this.defaultBoard,
      turn: 1,//(Math.round(Math.random()) % 2),
      invalidMove: false
    }    
  }  
    
  componentWillMount() {
    this._subscribe();
    this.props.horizon.store(Object.assign({},{id:this.props.id}, this.state));   
  }
  
  _turnToString(turn) {
    return turn?'X':'O';
  }
    
  _checkGame(){
    const board = this.state.board;
    //board.

  }
    
  _resetGame() {
    this.props.horizon.replace({id: this.props.id, board: this.defaultBoard});
  }
    
  _subscribe() {
    this.props.horizon.find(this.props.id).watch().subscribe(
      state => {
        if(state) {
          this.setState(state,() => { this._checkGame() });
        }
      },
      error => {
        console.log(error);
      }
    );
  }

  _handleClick(key) {
    const n = 3;
    const i = Math.floor(key/n), j = key - i*n;
    const state = this.state;
    let invalidMove = false;
    let newTurnState = 0;
    let newBoardState = state.board.map( 
      (row, idxRow) => {
        return row.map( (col, idxCol) => {
          if(idxRow === i && idxCol === j){
            if (state.board[i][j] !== '') {
              invalidMove = true;
            } else {
              const turnStr = this._turnToString(state.turn);
              newTurnState = state.turn ^ 1;
              return turnStr;
            }
          }      
          return col;
        })   
      }
    );
    
    this.props.horizon.replace({id: this.props.id, board: newBoardState, turn: newTurnState, invalidMove: invalidMove});

    //this.setState({board: newBoardState, turn: newTurnState, invalidMove: invalidMove}, 
    //              () => { this._checkGame() });
  }

  render() {	  
    console.log(this.state);
    return (
      <div>
        <span><b>Let's play</b></span>&nbsp;
        <span className="label label-success"> 
          Current turn: <b>{this._turnToString(this.state.turn)}</b> 
        </span>
        <br/><br/>
       
        <table className="noselect pointer">
          <tbody>
            {this.state.board.map(
              (row,idx) => {
                return <Row 
                           key={idx} 
                           row={row} 
                           rowIdx={idx} 
                           onClick={this._handleClick.bind(this)}>
                       </Row>
              }   
            )}
          </tbody>
        </table>  
        <button className="label btn-info" 
                onClick={this._resetGame.bind(this)}>
                Reset
        </button>
        <InvalidMove invalidMove={this.state.invalidMove} />
      </div>
    );
  }
}