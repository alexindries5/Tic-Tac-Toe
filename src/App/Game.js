import React, {Component} from 'react'
import GameBoard from './Board'

export default class Game extends Component{
    render(){
        return <div className="game">
            <h1>X,0 Game</h1>
            <hr></hr> 
            <GameBoard></GameBoard>
            
        </div>
    }

}

export function calculateWinner(squares) {
    const moves = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < moves.length; i++) {
      const [a, b, c] = moves[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }

