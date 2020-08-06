import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        '& > *': {
            margin: theme.spacing(1),
            width: theme.spacing(16),
            height: theme.spacing(16),
        },
    },
}));

const simpleList = () => (
    <ul>
        <li>מחיר, מהנמוך לגבוה</li>
        <li>מחיר, מהגבוה לנמוך</li>
        <li>דירוג, מהגבוה לנמוך</li>
        <li>דירוג, מהנמוך לגבוה</li>
        <li>הכי משתלם</li>
    </ul>
)

export default function SimplePaper(props) {
    const classes = useStyles();
    return (
        <div className={classes.root + " paper"}>
            <Paper elevation={3} children={simpleList()}> 

            </Paper>
        </div>
    );
}