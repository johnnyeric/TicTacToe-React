import Horizon from '@horizon/client';
import React from 'react';
import ReactDOM from 'react-dom';

import TicTacToe from './TicTacToe.jsx';

const horizon = Horizon({host: 'horizon-johnnyeric.c9users.io'});
horizon.onReady(function() {
    console.log("sim");
   //horizon.remove
});
horizon.connect();

class App extends React.Component {
  
  //ES7
  /*static defaultProps = {
    horizon = horizon('tictactoe');
  }*/
  
  constructor(props) {
    super(props);
  }
  
  uuid() {
      var i, random;
      var uuid = '';

      for (i = 0; i < 32; i++) {
        random = Math.random() * 16 | 0;
        if (i === 8 || i === 12 || i === 16 || i === 20) {
          uuid += '-';
        }
        uuid += (i === 12 ? 4 : (i === 16 ? (random & 3 | 8) : random))
          .toString(16);
      }
      return uuid;
  }
  
  render() {
    let id = this.uuid();
    return (
      <div>
        <h1>TicTacToe</h1>

        <TicTacToe id={id} horizon={this.props.horizon}/>
      
        <br/>
      
        <TicTacToe id={id} horizon={this.props.horizon}/>
      </div>
    );
  }
}

App.defaultProps = {horizon: horizon('tictactoe')};

ReactDOM.render(
  <App name="Johnny" />,
  document.getElementById('container')
);
