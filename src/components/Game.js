import React from 'react'
import { connect } from 'react-redux';
import { getStartGameBoard, keyPressed } from '../logic/logic'

document.onkeydown = keyPressed;

let boardArr = getStartGameBoard();
const Game = (props) => {
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

const mapStateToProps = state => state

export default connect(mapStateToProps)(Game);