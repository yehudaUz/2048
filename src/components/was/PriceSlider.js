import React from 'react'
import { connect } from 'react-redux';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';
import { updateSliderValues, filterUpdated } from '../actions/actions'

const useStyles = makeStyles({
    root: {
        width: "100%",
    },
});

const MySlider = withStyles({
    rail: {
        opacity: 1,
        backgroundColor: "white",
    }, thumb: {
        backgroundColor: "white"
    }, rail: {
        backgroundColor: "white"
    },
})(Slider);

function valuetext(value) {
    return `${value}`;
}



const PriceSlider = (props) => {
    const classes = useStyles();

    const handleChange = (event, newValue) => {
        props.dispatch(updateSliderValues(newValue))
    };
    
    const updateResult = (e) => {
        if (e.target.checked === true || e.target.checked === false)
            e.target.click()
        props.dispatch(filterUpdated(true))
    }

    document.onmouseup = updateResult

    return (
        <div className="priceSlider">
            <div className="priceSlider-header">
                <label>טווח מחירים לאדם</label>
                <div className="priceSlider-priceRange-wrapper">
                    <label className="priceSlider-priceRange-minPrice-label">{props.searchParams.fromPrice}</label>
                    <label className="priceSlider-priceRange-maxPrice-label">{props.searchParams.toPrice}</label>
                </div>
            </div>
            <div className={classes.root}>
                <MySlider
                    min={800}//{minMaxPrice(true) < min ? minMaxPrice(true) : min}
                    max={6000}//{minMaxPrice(false) > max ? minMaxPrice(true) : max}
                    value={[props.searchParams.fromPrice, props.searchParams.toPrice]}
                    onChange={handleChange}
                    onMouseUp={updateResult}
                    valueLabelDisplay="auto"
                    aria-labelledby="range-slider"
                    getAriaValueText={valuetext}
                    rail={{ backgroundColor: "white" }}
                    step={100}
                />
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return state
}

export default connect(mapStateToProps)(PriceSlider);