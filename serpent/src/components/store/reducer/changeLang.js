
const defaultState = {
    lang : 'us',
}


// start stop buttons
function changeLang(state = defaultState, action){
    let nextState
    switch (action.type) {
        case 'fr':
            nextState = {...state,
                    lang : 'us',
                }
            return(nextState)

        case 'us':
            nextState = {...state,
                    lang : 'fr',
                }
            return(nextState)
            
        default:
            return(state)
    }
}


export default changeLang
