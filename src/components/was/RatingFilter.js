import React from 'react'
import { connect } from 'react-redux';
import { Rating } from '@material-ui/lab';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import WhiteRadio from './WhiteRadio'

const RatingFilter = (props) => {
    return (
        <div className="ratingFilter-wrapper">
            <div className="ratingFilter-header">
                <label>דירוג מלון</label>
            </div>
            <RadioGroup defaultValue="start">
                <FormControlLabel labelPlacement="start" value="start" control={<WhiteRadio radioRating="0" />}
                    label={<Rating defaultValue={1} readOnly />} />
                <FormControlLabel labelPlacement="start" value="start" control={<WhiteRadio radioRating="1" />}
                    label={<Rating defaultValue={2} readOnly />} />
                <FormControlLabel labelPlacement="start" value="start" control={<WhiteRadio radioRating="2" />}
                    label={<Rating defaultValue={3} readOnly />} />
                <FormControlLabel labelPlacement="start" value="start" control={<WhiteRadio radioRating="3" />}
                    label={<Rating defaultValue={4} readOnly />} />
                <FormControlLabel labelPlacement="start" value="start" control={<WhiteRadio radioRating="4" />}
                    label={<Rating defaultValue={5} readOnly />} />
            </RadioGroup>
        </div>
    )
}

const mapStateToProps = (state) => {
    return state
}

export default connect(mapStateToProps)(RatingFilter);