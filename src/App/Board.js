import React, {Component} from 'react'
import Square from './Square'
import {calculateWinner} from './Game'

export default class Board extends Component{
    constructor(props){
        super(props)

        this.state = {
            squares: Array(9).fill(null),
			isXTurn: true,
			count: 0
			// winner:""
            
        }
    }
    onSquareClick(index) {
		const squares = [...this.state.squares];
		if(squares[index]) return;
		this.setState({
			squares,
			isXTurn: !this.state.isXTurn,
			count : this.state.count+1
		})
		if (calculateWinner(squares)) {
			return;
		}
		// else if(squares.includes(null)){
		// 	  console.log("Draw");
		//   }
		// //   else if(this.state.winner!= "X"){
		// // 	  this.state.winner = "Draw";
		// // 	  console.log("Intra");
		// //   }
		squares[index] = this.state.isXTurn ? 'X' : '0'
		
	}
	
    render() {
		const winner = calculateWinner(this.state.squares);
		const none = " No winner";
		// this.state.winner = calculateWinner(this.state.squares);
    	let status;
    if (winner && this.state.count <=9) {
	  status = 'Winner: ' + winner;
	} else if(!winner && this.state.count == 9){
		status ="Draw" + none;
	}
	else {
      status = 'Next player: ' + (this.state.isXTurn ? 'X' : 'O');
	}
		
		return <div className="board">
					<h1>{status}</h1>
			{
				this.state.squares.map( 
					(value, index) => <Square key={index}
					value={value}
					onSquareClick={() => this.onSquareClick(index)}
				/>)
			}
		</div>
	}

}