import React from 'react'
import "./Middle.css"
import Commands from "./commands/Commands"
import Board from "./board/Board"

const underfitNN = {'layer_1': {'a': [[-0.9876213669776917, 0.5229817628860474], [-0.8568693995475769, 0.7221350073814392], [-0.5615895390510559, -0.7781458497047424], [-0.3648894429206848, -0.1200217753648758], [-0.8248982429504395, -0.9483576416969299]], 'b': [[-0.0701567679643631], [-0.057108040899038315], [-0.08265611529350281], [0.07639961689710617], [0.104506716132164]]}, 'layer_2': {'a': [[-0.2591625154018402, 0.05859001353383064, 0.3442780077457428, -0.46465936303138733, -0.1113838478922844], [0.3207131326198578, 0.09300035983324051, -0.7740642428398132, 0.5972838401794434, 0.5149368643760681], [-0.4064578711986542, -0.3876286745071411, 0.4874676465988159, 0.47690173983573914, 0.7303912043571472]], 'b': [[-0.08265388011932373], [-0.0806230679154396], [-0.0017185411415994167]]}, 'layer_3': {'a': [[-0.30308228731155396, -0.1694071739912033, 0.7602234482765198], [0.3056805431842804, 0.584093451499939, 0.5851256251335144], [0.18491631746292114, 0.05180013179779053, 0.06654993444681168], [0.7216924428939819, -0.3556155264377594, -0.5742924809455872]], 'b': [[0.06782591342926025], [-0.09318569302558899], [0.09828692674636841], [0.09340810775756836]]}}

const regularNN = {'layer_1': {'a': [[-0.49640658497810364, 0.4253370761871338], [-0.27929627895355225, 0.9258110523223877], [-0.8698186278343201, 0.6742211580276489], [0.6960992217063904, 0.12687458097934723], [-0.3994043171405792, -1.16408371925354]], 'b': [[0.14892897009849548], [-0.07154309004545212], [0.176446333527565], [0.08971497416496277], [-0.16096298396587372]]}, 'layer_2': {'a': [[0.12853308022022247, -0.5459868311882019, 0.521704912185669, -0.5614646673202515, -0.0471632294356823], [-0.2435329258441925, 0.656083881855011, 0.36550599336624146, 0.5221785306930542, -0.30901607871055603], [0.9567451477050781, -0.6453057527542114, 0.8582505583763123, -0.48791244626045227, -0.1927589625120163]], 'b': [[-0.1522940695285797], [0.13156498968601227], [0.2795660197734833]]}, 'layer_3': {'a': [[-0.3404245674610138, -0.6130192279815674, -1.0835671424865723], [0.6736665368080139, -0.8124219179153442, 0.7141175866127014], [-0.5917528867721558, 0.2901421785354614, 0.1268109232187271], [0.13851134479045868, 0.16726863384246826, -1.0489262342453003]], 'b': [[0.9755178093910217], [-0.6517901420593262], [-0.625115156173706], [-0.2621055543422699]]}}

const overfitNN = {'layer_1': {'a': [[-0.8145759105682373, 0.8280461430549622], [0.9722892642021179, -1.090529441833496], [1.1584858894348145, 0.44681239128112793], [-0.017892364412546158, -0.009020042605698109], [0.7865144610404968, 0.8902683258056641]], 'b': [[0.7119196057319641], [1.2014892101287842], [0.18837344646453857], [-0.3309180736541748], [1.0363295078277588]]}, 'layer_2': {'a': [[0.46729788184165955, -0.27724966406822205, -0.24974925816059113, -0.5582247972488403, -1.8085936307907104], [-1.071717381477356, 1.0934325456619263, 0.6682634949684143, -0.5480891466140747, -0.1664556860923767], [0.6249403357505798, -0.013612051494419575, 1.1710245609283447, -0.3690488040447235, 1.1196799278259277]], 'b': [[0.9453803300857544], [0.5389916300773621], [-0.39932888746261597]]}, 'layer_3': {'a': [[-0.4715956449508667, 1.1147130727767944, -1.1419236660003662], [1.1723620891571045, 0.11476617306470871, -0.45552298426628113], [-0.8466841578483582, -0.7619199752807617, 0.510930061340332], [-1.5441462993621826, 0.7698404788970947, 0.18219804763793945]], 'b': [[0.7242226600646973], [0.053277637809515], [0.13767491281032562], [-0.9100236892700195]]}}

const dictNN = {
    underfitNN : underfitNN,
    regularNN : regularNN,
    overfitNN : overfitNN,
}

class NeuralNet{
    // relu function
    relu(arrVals){
    //# arrVals : list of values coming from the product aX + b
        var output = []
        for(var i = 0; i < arrVals.length; i++){
            if(arrVals[i][0] <= 0){output.push([0])}
            else{output.push([arrVals[i]])}
        }
        return(output)
    }

    arrProduct2D(arr0, arr1){
        //# computes the product of arr0 and arr1 (must be 2D arrays)
        var result = []
        var n = arr0.length
        var m = arr0[0].length
        var p = arr1[0].length

        //# (n * m)  * (m * p)

        for (var k = 0; k < n; k++){
            result.push([])
            for (var j = 0; j < p; j++){
                result[k][j] = 0
                for (var i = 0; i < m; i++){
                    result[k][j] += arr0[k][i] * arr1[i][j]
                }
            }
        }
        return(result)
    }

    sum2D(arr0, arr1){
        //# computes the sum of two 2D arrays
        var m = arr0.length
        var n = arr0[0].length

        var res = []

        for(var k = 0; k < m; k++){
            res.push([])
            for(var i = 0; i < n; i++){
                res[k][i] = arr0[k][i] + arr1[k][i]
            }
        }
        return(res)
    }

    softMax2D(arr){
        //# calculation of softmax of a 2D array (column vector)
        var n = arr.length
        var output = []
        var denominator = 0

        //# calculation of denominator
        for (var k = 0; k < n; k++){
            denominator += Math.exp(arr[k][0])
        }

        for (var k = 0; k < n; k++){
            output[k] = [Math.exp(arr[k][0]) / denominator]
        }
        return(output)
    }


    getOutputNeuralNet(nbLayers, dicWeights, inputX){
        // # apply relu for first n - 1 layers
        var X = inputX.slice()
        for (var layer = 1; layer <= nbLayers - 1; layer++){
            // # retrieve weights
            var a = dicWeights['layer_' + layer]["a"]
            var b = dicWeights['layer_' + layer]["b"]

            //# compute linear product and sum aX + b
            var z = this.arrProduct2D(a, X)
            z = this.sum2D(z, b)

            // # apply the reLu
            var theta = this.relu(z)

            // # copy the output
            X = theta.slice()
        }

        // # apply softmax
        var a = dicWeights['layer_' + nbLayers]["a"]
        var b = dicWeights['layer_' + nbLayers]["b"]

        //# compute linear product and sum aX + b
        var z = this.arrProduct2D(a, X)
        z = this.sum2D(z, b)

        var output = this.softMax2D(z)

        return(output)
    }

    shape(arr2D){
        //# returns the shape of the array
        var m = arr2D.length
        var n = arr2D[0].length

        return([m, n])
    }

    // choose if we have to go up (0), right (1), down (2), left (3)
    chooseDirection(outputNN){
        var maxi = 0, maxiIndex = 0, dir = 0

        for (var k = 0; k < 4; k++){
            if (outputNN[k][0] > maxi){
                maxi = outputNN[k][0]
                maxiIndex = k
            }else{}
        }

        // due to the fact our axis are not the same between the python script
        // and the javascript website, we have to make some adaptations
        if (maxiIndex === 0){dir = 1}
        else if (maxiIndex === 1){dir = 2}
        else if (maxiIndex === 2){dir = 3}
        else {dir = 0}
        return(dir)
    }
}

class Middle extends React.Component{
    constructor(props){
        super(props)
        this.nbCellsX = 15
        this.nbCellsY = 12
        // reference to cells
        this.refsCells = undefined

        // position of snake
        this.posSnake = [7, 5]
        // position of food
        this.posFood = [10, 3]

        // neural net
        this.nn = new NeuralNet()

        // bool to tell if game must go on or off
        this.stop = false

        // how long do we have to wait for the new snake move
        this.sleep = 1000

        // neural net used
        this.whichNN = "regularNN"

    }

    init(){
        var toggleColor = this.refsCells[this.posSnake[0]][this.posSnake[1]]
        toggleColor("snake")

        // draw food
        toggleColor = this.refsCells[this.posFood[0]][this.posFood[1]]
        toggleColor("food")
    }

    clear(){
        try {
            // erase snake
            var toggleColor = this.refsCells[this.posSnake[0]][this.posSnake[1]]
            toggleColor("cell")
        } catch (e) {
            // this case happens when snakes is going out of boundaries
            console.log(e);
        }

        // erase food
        var toggleColor = this.refsCells[this.posFood[0]][this.posFood[1]]
        toggleColor("cell")

        // reinit the snake and food position
        this.posSnake = [7, 5]
        this.posFood = [10, 3]

    }

    // changes animation speed
    changeSpeed = (newSpeedVal) => {return(this.sleep = 1000 / newSpeedVal)}

    // stop the game and restart
    stopGame = () => {this.stop = true}

    // start game
    startGame = () => {this.stop = false}

    // change the neural net used for the demo
    changeNN = (nn) => {this.whichNN = nn}

    // find position for food
    dealFood(noGoZone){
        // noGoZone = [X, Y]
        // choose on which cell to draw the food and returns coords
        var x = Math.floor((Math.random() * this.nbCellsX))

        // check the cell is occupied. If it is, we choose another location
        if (x === noGoZone[0]){
            if(x === 7){x = 2}
            else{x = 7}
        }
        var y = Math.floor((Math.random() * this.nbCellsY))

        // check the cell is occupied. If it is, we choose another location
        if (y === noGoZone[1]){
            if(y === 7){y = 2}
            else{y = 7}
        }

        this.posFood = [x, y]

        // plot new position of food
        var toggleColor = this.refsCells[this.posFood[0]][this.posFood[1]]
        toggleColor("food")
    }

    // check if snake got out of boundaries
    checkInBoundary(){
        var isOut;
        if ((this.posSnake[0] < 0) || (this.posSnake[1] < 0) || (this.posSnake[0] >= this.nbCellsX) || (this.posSnake[1] >= this.nbCellsY)){isOut = true}
        else(isOut = false)

        return(isOut)
    }

    moveSnake(){
        // erase last position of snake
        var toggleColor = this.refsCells[this.posSnake[0]][this.posSnake[1]]
        toggleColor("cell")

        // get probabilities of neural net
        var diff = [[this.posSnake[0] - this.posFood[0]], [this.posSnake[1] - this.posFood[1]]]
        var output = this.nn.getOutputNeuralNet(3, dictNN[this.whichNN], diff)

        // get direction in which the snake has to go to
        var dir = this.nn.chooseDirection(output)

        // going up
        if (dir === 0){this.posSnake[0]--}
        // right
        else if(dir === 1){this.posSnake[1]++}
        // down
        else if(dir === 2){this.posSnake[0]++}
        // left
        else{this.posSnake[1]--}

        // check if snake went out of boundaries
        var isOutOfBoundary = this.checkInBoundary()

        if (isOutOfBoundary){this.stop = true}
        else{
            // plot on board the new pos of snake
            toggleColor = this.refsCells[this.posSnake[0]][this.posSnake[1]]
            toggleColor("snake")
        }


    }

    snakeReachedFood(){
        if ((this.posSnake[0] === this.posFood[0]) && (this.posSnake[1] === this.posFood[1])){return(true)}
        else{return(false)}
    }

    play = () => {
        // check if snake reached the food
        var reach = this.snakeReachedFood()

        if (!reach){
            this.moveSnake()
        }
        else{
            // get new position for food
            this.dealFood(this.posSnake)
        }
    }

    // launching animation. recursive function to be able to change speed of animation
    callback = () => {
        if(!this.stop){this.play()}
        if(this.stop){
            // redraw the snake and food at their initial place
            this.clear()
            this.init()
        }

        setTimeout(this.callback, this.sleep)
    }

    componentDidMount(){
        this.init()

        setTimeout(this.callback, 1000)


    }

    render(){
        return(
            <div id="middle">
                <Commands changeSpeed = {this.changeSpeed} count = {this.changeCount} stop = {this.stopGame} start = {this.startGame} changeNN = {this.changeNN}/>
                <Board nbCellsX = {this.nbCellsX} nbCellsY = {this.nbCellsY} ref = {(ref) => {if(ref !== null){this.refsCells = ref.refsCells}}}/>
            </div>
        )
    }
}



export default Middle


// les traductions ne marchent pas
