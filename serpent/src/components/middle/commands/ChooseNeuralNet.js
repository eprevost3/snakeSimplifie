import React from 'react'
import './ChooseNeuralNet.css'
import {connect} from 'react-redux'
import translations from '../../lang/translations'

class ChooseNeuralNet extends React.Component{
    constructor(props){
        super(props)
    }

    // change neural net used
    changeVal = (e) => {
        var nn = e.target.value
        this.props.changeNN(nn)
    }

    render(){
        return(
            <div id = "chooseNN">
                <div id = "textSelect">{translations[this.props.lang]["chooseNN"]}</div>
                <select id="nn" onChange = {this.changeVal}>
                    <option value="underfitNN">{translations[this.props.lang].underfitNN}</option>
                    <option value="regularNN">{translations[this.props.lang].regularNN}</option>
                    <option value="overfitNN">{translations[this.props.lang].overfitNN}</option>
                </select>
            </div>
        )
    }

}

const mapStateToProps = (stateRedux) => {
    return({lang : stateRedux.lang,})
}

export default connect(mapStateToProps)(ChooseNeuralNet)
