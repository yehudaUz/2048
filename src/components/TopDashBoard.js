import React from 'react'
import { connect } from 'react-redux';

const TopDashBoard = (props) => {
    return (
        <div className="topDashBoard">
            <div className="topDashBoard-topPart">
                <h1 className="gameTitle">2048</h1>
                <div className="scoreContiner">
                    <div className="score">
                        <label className="scoreTitle">SCORE</label>
                        <label className="theScore">{props.score}</label>
                    </div>
                    <div className="bestScore">
                        <label className="bestScoreTitle">BEST</label>
                        <label className="theBestScore">{props.bestScore}</label>
                    </div>
                </div>
            </div>
            <div className="topDashBoard-bottomPart">
                <lablel className="topDashBoard-explanationTitle">Join the numbers and get to the <b>2048 tile!</b></lablel>
                <button className="newGameButton">New Game</button>
            </div>
        </div>
    )
}

const mapStateToProps = state => state

export default connect(mapStateToProps)(TopDashBoard);