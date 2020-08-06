import React from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import {updateSearchText,filterUpdated} from '../actions/actions'

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
        },
    },
}));

const SearchInput = (props) => {
    const handleChange = (e) => {
        props.dispatch(updateSearchText(e.target.value))
        props.dispatch(filterUpdated(true))
    }
    
    const classes = useStyles();
    return (
        <div className="search-input ">
            <InputBase className="search-input-mui"
                placeholder="חיפוש לפי שם מלון"
                classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput,
                }}
                inputProps={{ 'aria-label': 'search' }}
                startAdornment={<SearchIcon />}
                onChange={handleChange}
            />
        </div>
    )
}

const mapStateToProps = (state) => {
    return state
}

export default connect(mapStateToProps)(SearchInput);
