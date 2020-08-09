import React from 'react'
import { connect } from 'react-redux';
import { getStartGameBoard, keyPressed, addAtRandomPosition } from '../logic/logic'
import $, { readyException } from "jquery"

const Game = (props) => {
    const [board, setBoard] = React.useState(["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""]);

    const emptyArr = (board) => {
        for (let i = 0; i < board.length; i++) {
            if (board[i] != "")
                return false
        }
        return true
    }

    const renderBoardChanged = (keyPreassedResult) => {
        if (!keyPreassedResult)
            return undefined
        let moved = keyPreassedResult.moved, board = keyPreassedResult.board, boardAfterMove = keyPreassedResult.boardAfterMove
        moved.forEach(movedItem => {
            let boardSquareClassName = ".boardSquare" + movedItem.from
            let movingDistance = ($(boardSquareClassName).width() + 12) * movedItem.steps
            // $(boardSquareClassName).firstElementChild.classList.forEach(className => {
            //     if (className.includes("color"))
            //         $(boardSquareClassName).firstElementChild.classList.remove(className)
            // })
            // $(boardSquareClassName).firstElementChild.classList.add("color")
            if (movedItem.direction === "up")
                $(boardSquareClassName).css({ "transform": "translateY(-" + movingDistance + "px)" })
            else if (movedItem.direction === "down")
                $(boardSquareClassName).css({ "transform": "translateY(" + movingDistance + "px)" })
            else if (movedItem.direction === "right")
                $(boardSquareClassName).css({ "transform": "translateX(" + movingDistance + "px)" })
            else if (movedItem.direction === "left")
                $(boardSquareClassName).css({ "transform": "translateX(-" + movingDistance + "px)" })
        });
        return boardAfterMove
    }

    const renderBoard = (boardArr) => {
        $('div[style]').removeAttr('style');

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

    document.onkeydown = (e) => {
        let boardAfterChange = renderBoardChanged(keyPressed(e, board))
        if (boardAfterChange) {
            setTimeout(() => {
                setBoard(addAtRandomPosition(boardAfterChange))
            }, 200)
        }
    }

    if (emptyArr(board))
        setBoard(getStartGameBoard(board))

    return renderBoard(board)
}

const mapStateToProps = state => state

export default connect(mapStateToProps)(Game);