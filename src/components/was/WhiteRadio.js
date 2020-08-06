import React from 'react'
import { connect } from 'react-redux';
import Radio from '@material-ui/core/Radio';
import { withStyles } from '@material-ui/core/styles';
import { updateRatingValue, updateConditions, filterUpdated } from '../actions/actions'

const WhiteRadio = (props) => {
    const handleChange = (e) => {
        if (props.radioRating) {
            let newRadioArr = [...props.searchParams.rating]
            newRadioArr[props.radioRating] = !newRadioArr[props.radioRating]
            props.dispatch(updateRatingValue(newRadioArr))
        } else {
            let newCondiotions = { ...props.searchParams.conditions }
            newCondiotions[props.condition] = !newCondiotions[props.condition]
            props.dispatch(updateConditions(newCondiotions))
        }
        props.dispatch(filterUpdated(true))
    }

    const RadioComp = withStyles({
        root: {
            color: "white",
        },
    })((props) => <Radio color="default" {...props} />);

    return (
        <RadioComp
            onClick={handleChange}
            value={props.radioRating ? props.searchParams.rating[props.radioRating] : props.searchParams.conditions[props.condition]}
            checked={props.radioRating ? props.searchParams.rating[props.radioRating] : props.searchParams.conditions[props.condition]}
        />
    )
}

const mapStateToProps = (state) => {
    return state
}

export default connect(mapStateToProps)(WhiteRadio);