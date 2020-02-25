import React from 'react'
import './Cell.css'


class Cell extends React.Component{
    constructor(props){
        super(props)
        this.state = {class : "cell"}
    }

    // toggle the color of the cell, depending on what is on that cell (food , snake, nothing)
    toggleColor = (newState) => {this.setState({class : newState})}


    render(){
        return(<div className = {this.state.class} id = {this.props.x + ';' + this.props.y}
                    style = {{width : this.props.width + '%', height : this.props.height + '%'}}/>)
    }
}



export default Cell
