import React from 'react'
import { connect } from 'react-redux';

let boardArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

const Game = (props) => {
    let counter = -1
    return (
        <div className="game">
            {boardArr.map(number => {
                counter++
                return (
                    <div className={"boardSquare" + counter}>
                        <div className="boardSquareTextWrapper">
                            <label className="numberText">{number}</label>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

const mapStateToProps = state => state

export default connect(mapStateToProps)(Game);