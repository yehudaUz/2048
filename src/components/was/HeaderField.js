import React from 'react'
import { connect } from 'react-redux';

const HeaderField = (props) => {
    return (
        <div className="header-field">
            <a href={props.link}> {props.text}</a>
        </div>
    )
}

const mapStateToProps = (state) => {
    return state
}

export default connect(mapStateToProps)(HeaderField);