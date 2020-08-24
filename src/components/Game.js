import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import { getStartGameBoard, keyPressed, addAtRandomPosition, isGameOverLost,isGameOverWin } from '../logic/logic'
import $ from "jquery"
import { updateScore } from '../actions/actions'

const fillArr = (value) => {
    let arr = []
    for (let i = 0; i < 16; i++)
        arr.push(value)
    return arr
}

const fullArr = (boardAfterChange) => {
    for (let i = 0; i < boardAfterChange.length; i++)
        if (boardAfterChange[i] === "")
            return false;
    return true;
}

let lastStyleBoardArr = [], joinedPos = []
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
            boardAfterMove = keyPreassedResult.boardAfterMove;
        joinedPos = keyPreassedResult.joinedPosition

        joinedPos.forEach(element => {
            if (Array.isArray(element))
                ;
            else if (!isNaN(parseInt(boardAfterMove[element])))
                props.dispatch(updateScore(parseInt(boardAfterMove[element])))

        });

        let arr = fillArr(false)

        moved.forEach(movedItem => {
            let boardSquareClassName = ".boardSquare" + movedItem.from
            let gap = parseFloat(window.getComputedStyle(document.querySelector(".game")).rowGap)
            let movingDistance = ($(boardSquareClassName).width() + gap) * movedItem.steps
            //blink joined position
            // joinedPos.forEach(joinedItemPos => {
            //     arr[joinedItemPos] = {"tranform": "scale(1.2)"}
            // });

            if (movedItem.direction === "up")
                arr[movedItem.from] = { "transform": "translateY(-" + movingDistance + "px)" }
            else if (movedItem.direction === "down")
                arr[movedItem.from] = { "transform": "translateY(" + movingDistance + "px)" }
            else if (movedItem.direction === "right")
                arr[movedItem.from] = { "transform": "translateX(" + movingDistance + "px)" }
            else if (movedItem.direction === "left")
                arr[movedItem.from] = { "transform": "translateX(-" + movingDistance + "px)" }
        });

        setBoard({ squares: board.squares, styles: arr })

        return boardAfterMove
    }

    useEffect(() => {
        setTimeout(() => {
            if (isGameOverLost(board)) {
                alert("SORRY! YOU LOST!!!")
                window.location.reload()
            }
            else if (isGameOverWin(board)) {
                alert("AWEASOME!!!! YOU WON!!!!!!!")
                window.location.reload()
            }
        }, 20)
    })

    const renderBoard = (boardArr) => {
        let counter = -1, styleCounter = 0
        const jsx = (
            <div className="game">
                {boardArr.squares.map(number => {
                    counter++
                    if (boardArr.styles[counter] !== false) {
                        // lastStyleBoardArr.push({ pos: counter, styles: boardArr.styles[counter], number: boardArr.squares[counter] })
                        lastStyleBoardArr[counter] = { styles: boardArr.styles[counter], number: boardArr.squares[counter] }
                        styleCounter++
                    }

                    return (
                        <div className="boardSquareWrapper" key={counter}>
                            {boardArr.styles[counter] !== false ? //with style / transform active
                                <div key={counter} className={"boardSquare" + counter} style={boardArr.styles[counter] !== false ? boardArr.styles[counter] : { /*transform: "none"*/ }} >
                                    <div className={"boardSquareTextWrapper color" + number}>
                                        <label className={"numberText" +
                                            (number.toString().length === 3 ? " threeDigitNumber" : "") +
                                            (number.toString().length === 4 ? " fourDigitNumber" : "")}>{number}</label>
                                    </div>
                                </div>
                                : boardArr.styles[counter] === false && !lastStyleBoardArr[counter] ? //no stylem empty
                                    <div key={counter} className={"boardSquare" + counter}  >
                                        <div className={"boardSquareTextWrapper color" + number}>
                                            <label className={"numberText" +
                                                (number.toString().length === 3 ? " threeDigitNumber" : "") +
                                                (number.toString().length === 4 ? " fourDigitNumber" : "")}>{number}</label>
                                        </div>
                                    </div>
                                    : //had transform before
                                    <div key={counter} className={"boardSquare" + counter + " hide"} >
                                        <div className={"boardSquareTextWrapper color" + number}>
                                            <label className={"numberText" +
                                                (number.toString().length === 3 ? " threeDigitNumber" : "") +
                                                (number.toString().length === 4 ? " fourDigitNumber" : "")}>{number}</label>
                                        </div>
                                    </div>
                            }
                        </div>
                    )
                })}
            </div>
        )


        if (styleCounter == 0 && joinedPos.length > 0 && lastStyleBoardArr.length > 0) { //blink effect
            joinedPos.forEach(pos => {
                if (document.getElementsByClassName("boardSquare" + pos).length > 0) {
                    setTimeout(() => {
                        document.getElementsByClassName("boardSquare" + pos)[0].classList.add("getBigger") //style=document.getElementsByClassName("boardSquare"+pos)[0].style + " transform: scale(1.1);";
                    }, 1)
                    setTimeout(() => {
                        document.getElementsByClassName("boardSquare" + pos)[0].classList.remove("getBigger") //style=document.getElementsByClassName("boardSquare"+pos)[0].style + " transform: scale(1.1);";
                    }, 100)
                }
            })

        }
        if (styleCounter == 0)
            lastStyleBoardArr = []

        setTimeout(() => {
            document.querySelectorAll("[class^='boardSquare']").forEach(element => {
                if (element.classList.contains("hide"))
                    element.classList.remove("hide")
            })
        }, 50);

        return jsx
    }

    let prevDate = new Date();
    document.onkeydown = (e) => {
        e.preventDefault()
        if ((new Date()) - prevDate < 80)
            return
        prevDate = new Date();

        let boardAfterChange = renderBoardChanged(keyPressed(e, board))

        if (boardAfterChange && !fullArr(boardAfterChange)) {
            setTimeout(() => {
                board.squares = addAtRandomPosition(boardAfterChange)
                setBoard(board)
            }, 70)
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