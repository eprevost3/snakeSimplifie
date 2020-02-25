import React from 'react'
import './Header.css'
import Button from '../other/Button'
import translations from '../lang/translations'

const Header = ({lang, changeLangage}) => {
    return(
        <div id="header">
            <Button id='home' image = 'home' alt = 'Flag' title = {translations[lang].titleHome} onClick = {()=>{window.location.href ="./"}}/>
            <div id="title">{translations[lang].welcome}</div>
            <Button id='lang' image = {translations[lang].image} alt = 'Flag' title = {translations[lang].titleFlag} onClick = {() => {changeLangage()}}/>

        </div>
        )
    }


export default Header
