import React from 'react'
import { connect } from 'react-redux';

const Instruction = (props) => {
    return (
        <div className={props.continer}>
            <label className={props.label}>
                {props.text}
            </label>
        </div>
    )
}

const mapStateToProps = state => state

export default connect(mapStateToProps)(Instruction);