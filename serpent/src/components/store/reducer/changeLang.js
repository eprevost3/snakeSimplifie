// cookies updated in the store
const readCookie = () => {
    var cookies = {"langage" : "",}

    var cooks = document.cookie
    // parse result
    cooks = cooks.split(";")

    // find langage and best score
    for (var k = 0; k < cooks.length; k++){
        var str = cooks[k].replace(/\s/g, '')

        if(str.substring(0, 8) === "language"){cookies.language = str.split("=")[1]}
        else{}
    }
    return(cookies)
}

// set the value of the cookies
const setValueCookie = (dicCookies) => {
    // the input dictionnary contains the values of the cookies
    var keys = Object.keys(dicCookies)
    var date = new Date()
    date.setTime(date.getTime() + (365*24*60*60*1000));

    // cookie duration : one year
    var expires = "expires="+ date.toUTCString();

    keys.forEach((key, idx) => {document.cookie = `${key}=${dicCookies[key]};${expires};path=/;SameSite=None;Secure`})
}

// update  cookies value
const udpdateCookies = (cookies) => {setValueCookie(cookies)}

const defaultState = {lang : readCookie().language || "fr",}


// start stop buttons
function changeLang(state = defaultState, action){
    let nextState
    switch (action.type) {
        case 'fr':
            nextState = {...state,
                    lang : 'us',
                }

            // update cookie value
            if (nextState){udpdateCookies({language : 'us'})}
            else{}

            return(nextState)

        case 'us':
            nextState = {...state,
                    lang : 'fr',
                }

            // update cookie value
            if (nextState){udpdateCookies({language : 'fr'})}
            else{}

            return(nextState)

        default:
            return(state)
    }
}


export default changeLang
