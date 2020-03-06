import React from 'react'
import './Buttons.css'
import { connect } from 'react-redux'
import Button from '../../other/Button'
import translations from '../../lang/translations'

const Buttons = (props) => {
    return(
        <div id = "buttons">
            <Button id='play' image = {"play"} alt = 'Play' title = {translations[props.lang]["titleStart"]} onClick = {() => {props.start()}}/>
            <Button id='stop' image = {"stop"} alt = 'Stop' title = {translations[props.lang]["titleStop"]} onClick = {() => {props.stop()}}/>
        </div>
    )
}

const mapStateToProps = (state) => {return {lang : state.lang}}

export default connect(mapStateToProps)(Buttons)
