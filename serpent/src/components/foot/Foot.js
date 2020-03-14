import React from 'react'
import './Foot.css'
import {connect} from 'react-redux'
import translations from '../lang/translations'

const Foot = (props) => {
    return(
        <div id="foot">
            {translations[props.lang]["foot"]}
            <a href = 'https://pixabay.com/vectors/sound-button-glossy-set-player-145674/'>
                {translations[props.lang]["credit"]}
            </a>
        </div>
    )
}


const mapStateToProps = (state) => {
    return({lang : state.lang})
}

export default connect(mapStateToProps)(Foot)
