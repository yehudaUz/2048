import React from 'react'
import { connect } from 'react-redux';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import WhiteRadio from './WhiteRadio'

const HostingBase = (props) => {
    return (
        <div className="hostingBase">
            <div className="hostingBase-header">
                <label>בסיס אירוח</label>
            </div>
            <RadioGroup defaultValue="start">
                <FormControlLabel labelPlacement="start" value="start" control={<WhiteRadio condition="sleep" />}
                    label={"לינה"} />
                <FormControlLabel labelPlacement="start" value="start" control={<WhiteRadio condition="breakfast" />}
                    label={"ארוחת בוקר"} />
            </RadioGroup>
        </div>
    )
}

const mapStateToProps = (state) => {
    return state
}

export default connect(mapStateToProps)(HostingBase);