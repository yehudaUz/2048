import React from 'react'
import { connect } from 'react-redux';
import Radio from '@material-ui/core/Radio';
import { withStyles } from '@material-ui/core/styles';

const GreyRadio = withStyles({
    root: {
      color: "white",
      '&$checked': {
        color: "white",
      },
    },
    checked: {},
  })((props) => <Radio color="default" {...props} />);

const LabelWithRadio = (props) => {
    return (
        <label className="radio-label">
            <GreyRadio
                value={props.value}
                checked={props.isChecked}
                className={"radio-in-label"}
            />
            {props.labelText}
        </label>
    )
}

const mapStateToProps = (state) => {
    return state
}

export default connect(mapStateToProps)(LabelWithRadio);