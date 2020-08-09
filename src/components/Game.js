import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux';
import { getStartGameBoard, keyPressed, addAtRandomPosition, joinNumbers } from '../logic/logic'
import $, { readyException } from "jquery"
import { updateScore } from '../actions/actions'

const Game = (props) => {
    const [board, setBoard] = React.useState(["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""]);
    let joinedNumbers = [], lastKeyClicked = ""

    const emptyArr = (board) => {
        for (let i = 0; i < board.length; i++)
            if (board[i] != "")
                return false
        return true
    }
    const isArrayDiffrent = (board1Arr, board2Arr) => {
        if (!board1Arr || !board2Arr || !board1Arr.length || !board2Arr.length || board1Arr.length != board2Arr.length)
            return undefined
        for (let i = 0; i < board1Arr.length; i++)
            if (board1Arr[i] != board2Arr[i])
                return true
        return false
    }

    const renderBoardChanged = (keyPreassedResult) => {
        if (!keyPreassedResult)
            return undefined
        let moved = keyPreassedResult.moved, board = keyPreassedResult.board,
            boardAfterMove = keyPreassedResult.boardAfterMove, joinedPos = keyPreassedResult.joinedPosition

        joinedPos.forEach(element => {
            if (Array.isArray(element))
                ;
            else if (!isNaN(parseInt(boardAfterMove[element])))
                props.dispatch(updateScore(parseInt(boardAfterMove[element])))

        });

        moved.forEach(movedItem => {
            let boardSquareClassName = ".boardSquare" + movedItem.from
            let movingDistance = ($(boardSquareClassName).width() + 12) * movedItem.steps
            //blink joined position

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

    useEffect(() => {
        $('div[style]').removeAttr('style');
    })

    const renderBoard = (boardArr) => {
        let counter = -1
        const jsx = (
            <div className="game">
                {boardArr.map(number => {
                    counter++
                    return (
                        <div className="boardSquareWrapper">
                            <div key={counter} className={"boardSquare" + counter}>
                                <div className={"boardSquareTextWrapper color" + number}>
                                    <label className={"numberText" +
                                        (number.toString().length === 3 ? " threeDigitNumber" : "") +
                                        (number.toString().length === 4 ? " fourDigitNumber" : "")}>{number}</label>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        )

        return jsx
    }

    let prevDate = new Date();
    document.onkeydown = (e) => {
        if ((new Date()) - prevDate < 80)
            return
        prevDate = new Date();

        lastKeyClicked = e.keyCode
        let boardAfterChange = renderBoardChanged(keyPressed(e, board))

        if (boardAfterChange) {
            setTimeout(() => {

                setBoard(addAtRandomPosition(boardAfterChange))

            }, 130)
        }
    }

    if (emptyArr(board))
        setBoard(getStartGameBoard(board))

    return renderBoard(board)
}

const mapStateToProps = state => state

export default connect(mapStateToProps)(Game);