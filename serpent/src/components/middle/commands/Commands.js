import React from 'react'
import "./Commands.css"
import Score from './Score'
import Speed from './Speed'
import Buttons from './Buttons'

class Commands extends React.Component{
    render(){
        return(
            <div id="commands">
                <Score/>
                <Speed changeSpeed = {this.props.changeSpeed}/>
                <Buttons/>
            </div>
        )
    }
}


export default Commands
