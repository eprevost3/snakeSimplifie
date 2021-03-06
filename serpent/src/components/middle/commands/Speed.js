import React from 'react'
import './Speed.css'
import {connect} from 'react-redux'
import translations from '../../lang/translations'

// monitoring the speed
class Speed extends React.Component{
    constructor(props){
        super(props)
        this.state = {speed : 1}
    }

    changeValue = () => {
        var slider = document.getElementById('speedSlider')

        // update new value of  slider
        this.setState({speed : slider.value})

        // propagate the slider value to the rest of the parent component, to speed up
        // animation on the Board
        this.props.changeSpeed(slider.value)
    }

    render(){
        return(
            <div id="speed" title = {translations[this.props.lang]["sliderTitle"]}>
                <p>{translations[this.props.lang]["speed"] + this.state.speed}</p>
                <input  id = "speedSlider"
                        type="range"
                        min="0.5"
                        max="5"
                        step = "0.5"
                        defaultValue = "1"
                        onChange = {this.changeValue}/>
            </div>

        )
    }
}

const mapStateToProps = (state) => {return({lang : state.lang})}

export default connect(mapStateToProps)(Speed)
