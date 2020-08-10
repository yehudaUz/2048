import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import { getStartGameBoard, keyPressed, addAtRandomPosition, isGameOver } from '../logic/logic'
import $ from "jquery"
import { updateScore } from '../actions/actions'

const fillArr = (value) => {
    let arr = []
    for (let i = 0; i < 16; i++)
        arr.push(value)
    return arr
}

const Game = (props) => {
    const [board, setBoard] = React.useState({ squares: fillArr(""), styles: fillArr(false) });

    const emptyArr = (board) => {
        for (let i = 0; i < board.squares.length; i++)
            if (board.squares[i] != "")
                return false
        return true
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

        let arr = fillArr(false)

        moved.forEach(movedItem => {
            let boardSquareClassName = ".boardSquare" + movedItem.from
            let movingDistance = ($(boardSquareClassName).width() + 12) * movedItem.steps
            //blink joined position
            // joinedPos.forEach(joinedItemPos => {
            //     arr[joinedItemPos] = {"tranform": "scale(1.2)"}
            // });

            if (movedItem.direction === "up")
                arr[movedItem.from] = { "transform": "translateY(-" + movingDistance + "px)" }
            //  $(boardSquareClassName).css({ "transform": "translateY(-" + movingDistance + "px)" })
            else if (movedItem.direction === "down")
                arr[movedItem.from] = { "transform": "translateY(" + movingDistance + "px)" }
            //$(boardSquareClassName).css({ "transform": "translateY(" + movingDistance + "px)" })
            else if (movedItem.direction === "right")
                arr[movedItem.from] = { "transform": "translateX(" + movingDistance + "px)" }
            //$(boardSquareClassName).css({ "transform": "translateX(" + movingDistance + "px)" })
            else if (movedItem.direction === "left")
                arr[movedItem.from] = { "transform": "translateX(-" + movingDistance + "px)" }
            //$(boardSquareClassName).css({ "transform": "translateX(-" + movingDistance + "px)" })
        });

        

        // setBoardStyleArr(arr)
        setBoard({ squares: board.squares, styles: arr })

        return boardAfterMove
    }

    useEffect(() => {
        setTimeout(() => {
            if (isGameOver(board)) {
                alert("SORRY! YOU LOST!!!")
                window.location.reload()
            }
        }, 20)
    })

    const renderBoard = (boardArr) => {
        let counter = -1
        const jsx = (
            <div className="game">
                {boardArr.squares.map(number => {
                    counter++
                    return (
                        <div className="boardSquareWrapper" key={counter}>
                            <div key={counter} className={"boardSquare" + counter} style={boardArr.styles[counter] !== false ? boardArr.styles[counter] : { transform: "none" }} >
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

        // setTimeout(() => {
        //  $('div[style]').removeAttr('style');
        //  setBoardStyleArr(SetFalseArr())
        // }, 155)

        return jsx
    }

    let prevDate = new Date();
    document.onkeydown = (e) => {
        // e.preventDefault()
        if ((new Date()) - prevDate < 80)
            return
        prevDate = new Date();

        let boardAfterChange = renderBoardChanged(keyPressed(e, board))

        if (boardAfterChange) {
            setTimeout(() => {
                //  setBoardStyleArr(SetFalseArr())
                // setBoardStyleArr(boardAfterChange)
                board.squares = addAtRandomPosition(boardAfterChange)
                setBoard(board)

            }, 60)
        }
    }

    if (emptyArr(board)) {
        board.squares = getStartGameBoard(board.squares)
        setBoard(board)
    }

    return renderBoard(board)
}

const mapStateToProps = state => state

export default connect(mapStateToProps)(Game);