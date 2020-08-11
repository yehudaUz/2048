import React from 'react'
import { connect } from 'react-redux';

const ButtonWithTextAndSvg = (props) => {
    return (
        <div className={props.continer}>
            {props.svg()}
            <label>{props.text}</label>
        </div>
    )
}

const mapStateToProps = state => state

export default connect(mapStateToProps)(ButtonWithTextAndSvg);