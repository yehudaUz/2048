import React from 'react'
import { connect } from 'react-redux';
import HeaderField from './HeaderField';

const Currency = (props) => {
    return (
        <div className="currency">
            <HeaderField text={props.currency} />
        </div>
    )
}

const mapStateToProps = (state) => {
    return state
}

export default connect(mapStateToProps)(Currency);