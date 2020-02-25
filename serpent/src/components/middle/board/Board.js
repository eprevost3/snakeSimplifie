import React from 'react'
import "./Board.css"
import Cell from './Cell'

class Board extends React.Component{
    constructor(props){
        super(props)
        this.listIds = this.buildIds(this.props.nbCellsX, this.props.nbCellsY)

        // list containing the reference to every cell
        this.refsCells = {}
    }

    // building ids of cells
    buildIds(nbCellsX, nbCellsY){
        var listIds = [], count = 0

        for (var x = 0 ; x < nbCellsX ; x ++){
            for (var y = 0 ; y < nbCellsY ; y ++){
                listIds.push({x : x, y : y, key : count})
                count ++
            }
        }
        return(listIds)
    }

    render(){
        return(
            <div id="board">
                {this.listIds.map(({x, y, key}) => (<Cell id = {key}
                                                          x = {x}
                                                          y = {y}
                                                          key = {key}
                                                          width = {100 / this.props.nbCellsY}
                                                          height = {100 / this.props.nbCellsX}
                                                          ref = {(ref) => {if (ref !== null){if(y === 0){this.refsCells[x] = {}}; this.refsCells[x][y] = ref.toggleColor;}}}
                                                          />))}
            </div>
        )
    }
}


export default Board
