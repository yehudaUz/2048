import React from 'react'
import { connect } from 'react-redux';

const HomeLink = (props) => {
    return (
        <div className="home-link">
            <a href="/">Alray</a>
        </div>
    )
}

const mapStateToProps = (state) => {
    return state
}

export default connect(mapStateToProps)(HomeLink);