import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { connect } from 'react-redux';
import { updateSortBy, filterUpdated } from '../actions/actions'

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));

const SimpleSelect = (props) => {
    const classes = useStyles();

    const handleChange = (event) => {
        props.dispatch(updateSortBy(event.target.value))
        props.dispatch(filterUpdated(true))
    };

    return (
        <div className="select">

            <FormControl className={classes.formControl + " select-form"}>
                <Select
                    value={props.searchParams.sortBy}
                    onChange={handleChange}>
                    <MenuItem value={"priceLowToHigh"}>מחיר, מהנמוך לגבוה</MenuItem>
                    <MenuItem value={"priceHighToLow"}>מחיר, מהגבוה לנמוך</MenuItem>
                    <MenuItem value={"ratingHighToLow"}>דירוג, מהגבוה לנמוך</MenuItem>
                    <MenuItem value={"ratingLowToHigh"}>דירוג, מהנמוך לגבוה</MenuItem>
                    <MenuItem value={"worthwhile"}>הכי משתלם</MenuItem>
                </Select>
            </FormControl>
            <label className="select-sortBy-label">:מיין לפי</label>

        </div>
    );
}

const mapStateToProps = (state) => {
    return state
}

export default connect(mapStateToProps)(SimpleSelect);