import React from 'react';
import {useLocation} from 'react-router-dom';
import {
    CssBaseline,
    Grid,
    Typography,
    Container,
    Avatar,
} from '@material-ui/core';
import DirectionsCarIcon from '@material-ui/icons/DirectionsCar';
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
        margin: theme.spacing(3),
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

export default function DisqualificationPage() {
    let location = useLocation();
    const classes = useStyles();

    return (
        <Container component="main" maxWidth="xs">
            <Helmet>
                <title>Auto Loan Not Approved</title>
            </Helmet>

            <CssBaseline/>
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <DirectionsCarIcon/>
                </Avatar>
                <Typography component="h1" variant="h5">
                    Auto Loan <strong>Not Approved</strong>
                </Typography>

                <Grid container>
                    <Grid item xs>
                        <p>
                            <strong>Reason:</strong> {location.state.statusText}
                        </p>
                        <p>
                            Contact Us by phone (555-555-5555) or email (support@support.com) for more additional
                            information.
                        </p>
                    </Grid>
                </Grid>
            </div>
        </Container>
    );
}