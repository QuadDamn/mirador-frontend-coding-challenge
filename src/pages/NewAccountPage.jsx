import React, {useState} from 'react';
import {useLocation} from 'react-router-dom';
import {
    Button,
    TextField,
    CssBaseline,
    Grid,
    Typography,
    Container,
    Avatar,
    InputAdornment
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

export default function LandingPage() {
    const location = useLocation();

    const [usernameValue, setUsernameValue] = useState();
    const [passwordValue, setPasswordValue] = useState();
    const [passwordConfirmValue, setPasswordConfirmValue] = useState();

    const [usernameErrorText, setUsernameErrorText] = useState('');
    const [passwordErrorText, setPasswordErrorText] = useState('');
    const [passwordConfirmErrorText, setPasswordConfirmErrorText] = useState('');

    const [submitButtonText, setSubmitButtonText] = useState();
    const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);

    const classes = useStyles();

    const handleFormSubmit = async (event) => {
        event.preventDefault();

        let errorFound = false;

        setSubmitButtonText('Processing...');
        setSubmitButtonDisabled(true);

        setUsernameErrorText('');
        setPasswordErrorText('');
        setPasswordConfirmErrorText('');

        setSubmitButtonText('');
        setSubmitButtonDisabled('');

        if (!usernameValue) {
            errorFound = true;
            setUsernameErrorText('Field must have a value.');
        }

        if (!passwordValue) {
            errorFound = true;
            setPasswordErrorText('Field must have a value.');
        }

        if (!passwordConfirmValue) {
            errorFound = true;
            setPasswordConfirmErrorText('Field must have a value.');
        }

        // Validate email

        // Validate the passwords match.

        // Validate password (more than 8 characters and a number or special character)




        // If no errors were found, continue the form submission.
        if (!errorFound) {

            // Throw an alert letting the user know the account was successfully created.
            // There is no requirements around this, so just keeping it simple.

        } else {
            // Set the Submit Button back to its default state so the user can submit again after correcting the errors.
            setSubmitButtonDisabled(false);
            setSubmitButtonText('');
        }
    };

    return (
        <Container component="main" maxWidth="xs">
            <Helmet>
                <title>New Account Creation</title>
            </Helmet>

            <CssBaseline/>
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <DirectionsCarIcon/>
                </Avatar>
                <Typography component="h1" variant="h5">
                    New Account Creation
                </Typography>
                <form className={classes.form} onSubmit={(event) => handleFormSubmit(event)}>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        id="username"
                        label="Username"
                        name="username"
                        value={usernameValue}
                        onChange={(event) => setUsernameValue(event.target.value)}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start"/>
                            )
                        }}
                        helperText={usernameErrorText}
                        error={!!usernameErrorText}
                    />

                    <TextField
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        id="password"
                        label="Password"
                        name="password"
                        type="password"
                        value={passwordValue}
                        onChange={(event) => setPasswordValue(event.target.value)}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start"/>
                            )
                        }}
                        helperText={passwordErrorText}
                        error={!!passwordErrorText}
                    />

                    <TextField
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        name="password-confirm"
                        label="Password Confirm"
                        id="password-confirm"
                        type="password"
                        value={passwordConfirmValue}
                        onChange={(event) => setPasswordConfirmValue(event.target.value)}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start"/>
                            )
                        }}
                        helperText={passwordConfirmErrorText}
                        error={!!passwordConfirmErrorText}
                    />

                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                        disabled={submitButtonDisabled}
                    >
                        {submitButtonText ? submitButtonText : "Create Account"}
                    </Button>
                </form>
            </div>
        </Container>
    );
}