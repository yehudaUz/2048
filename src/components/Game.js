import React from 'react'
import { connect } from 'react-redux';
import { getStartGameBoard, keyPressed } from '../logic/logic'
import $ from "jquery"

const renderBoardChanged = ({ moved, copyBoard }) => {
    if (!moved || !copyBoard)
        return
    console.log(moved, copyBoard)
    //transform: translateX(200px);
    moved.forEach(movedItem => {
        let boardSquareClassName = ".boardSquare" + movedItem.from
        // let movingDistance =  $(boardSquareClassName).height() * movedItem.to
        let movingDistance = $(boardSquareClassName).height() * movedItem.steps
        if (movedItem.direction === "up")
            $(boardSquareClassName).css({ "transform": "translateY(-" + movingDistance + "px)" })
        else if (movedItem.direction === "down")
            $(boardSquareClassName).css({ "transform": "translateY(" + movingDistance + "px)" })
    });
}

document.onkeydown = (e) => renderBoardChanged(keyPressed(e));

const renderBoard = (boardArr) => {
    let counter = -1
    return (
        <div className="game">
            {boardArr.map(number => {
                counter++
                return (
                    <div key={counter} className={"boardSquare" + counter}>
                        <div className={"boardSquareTextWrapper color" + number}>
                            <label className={"numberText" +
                                (number.toString().length === 3 ? " threeDigitNumber" : "") +
                                (number.toString().length === 4 ? " fourDigitNumber" : "")}>{number}</label>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

let boardArr = getStartGameBoard();
const Game = (props) => {
    return renderBoard(boardArr)
}

const mapStateToProps = state => state

export default connect(mapStateToProps)(Game);