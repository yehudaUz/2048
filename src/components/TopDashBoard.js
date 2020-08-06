import React from 'react'
import { connect } from 'react-redux';

const TopDashBoard = (props) => {
    return (
        <div className="topDashBoard">
            <h4>blabla</h4>
            <h4>blagsfdgsbla</h4>
            <h4>blasdfgsdfgbla</h4>
            <h4>blabgsdfgdsla</h4>
        </div>
    )
}

const mapStateToProps = state => state

export default connect(mapStateToProps)(TopDashBoard);