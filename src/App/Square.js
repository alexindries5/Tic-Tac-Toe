import React, {Component} from 'react'

export default class Square extends Component{
    constructor(props){
        super(props)

        this.state = {
            checked: "X"
        }
    }

    render(){
        return <div className="square"
        onClick={() =>{
            this.props.onSquareClick()

        } }>{this.props.value}</div>
    }

}