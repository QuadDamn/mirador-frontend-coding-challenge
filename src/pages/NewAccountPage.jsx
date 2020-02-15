import React from 'react';
import {
    CssBaseline,
    Container,
} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import Helmet from "react-helmet";

const useStyles = makeStyles(theme => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

export default function NewAccountPage() {
    const classes = useStyles();

    return (
        <Container component="main" maxWidth="xs">
            <Helmet>
                <title>New Account</title>
            </Helmet>

            <CssBaseline/>
            <div className={classes.paper}>
                New Account Page!
            </div>
        </Container>
    );
}