import React from 'react'
import "./Commands.css"
import ChooseNeuralNet from './ChooseNeuralNet'
import Speed from './Speed'
import Buttons from './Buttons'

class Commands extends React.Component{
    render(){
        return(
            <div id="commands">
                <ChooseNeuralNet changeNN = {this.props.changeNN}/>
                <Speed changeSpeed = {this.props.changeSpeed}/>
                <Buttons stop = {this.props.stop} start = {this.props.start}/>
            </div>
        )
    }
}



export default Commands
