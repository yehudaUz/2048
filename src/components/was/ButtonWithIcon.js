import React from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import { purple, grey } from '@material-ui/core/colors';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import { updateSortBy,filterUpdated } from '../../actions/actions'

const ColorButton = withStyles((theme) => ({
    root: {
        color: theme.palette.getContrastText(grey[200]),
        backgroundColor: purple[0],
        '&:hover': {
            backgroundColor: "#313685",
        },
    },
}))(Button);

const useStyles = makeStyles((theme) => ({
    margin: {
    },
}));

const IconLabelButtons = (props) => {
    const classes = useStyles();
    return (
        <ColorButton onClick={() => {
            props.dispatch(updateSortBy(props.sortType))
            props.dispatch(filterUpdated(true))
        }} variant="text" color="primary" className={classes.margin + " " + props.sortType}
            endIcon={props.icon ? <props.icon /> : ""}
        >
            {props.text}
            {props.paper ? props.paper : ""}
        </ColorButton>
    );
}

const mapStateToProps = (state) => {
    return state
}

export default connect(mapStateToProps)(IconLabelButtons);