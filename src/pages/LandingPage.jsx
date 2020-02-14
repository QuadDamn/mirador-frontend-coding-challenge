import React from 'react';
import {
    Button,
    TextField,
    CssBaseline,
    Grid,
    Typography,
    Container,
    Avatar
} from '@material-ui/core';
import DirectionsCarIcon from '@material-ui/icons/DirectionsCar';
import {makeStyles} from '@material-ui/core/styles';
import MaterialUIForm from 'react-material-ui-form'

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

export default function LandingPage() {
    const classes = useStyles();

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline/>
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <DirectionsCarIcon/>
                </Avatar>
                <Typography component="h1" variant="h5">
                    Qualification Form for Auto Loan
                </Typography>
                <MaterialUIForm className={classes.form}>

                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="auto-purchase-price"
                        label="Auto Purchase Price"
                        name="auto-purchase-price"
                    />

                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="auto-make"
                        label="Auto Make"
                        name="auto-make"
                    />

                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="auto-model"
                        label="Auto Model"
                        name="auto-model"
                    />

                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="user-estimated-yearly-income"
                        label="User Estimated Yearly Income"
                        name="user-estimated-yearly-income"
                    />

                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="user-estimated-credit-score"
                        label="User Estimated Credit Score"
                        id="user-estimated-credit-score"
                    />

                    <Grid container>
                        <Grid item xs>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed placerat ante id elit cursus, a interdum nunc venenatis.
                            Cras nulla nibh, euismod non turpis a, ullamcorper feugiat leo. Pellentesque elementum sapien tellus, quis blandit
                            tortor malesuada eget. Integer vel neque in dolor euismod fermentum et a nulla. Pellentesque ultricies est
                            dignissim malesuada aliquet. Nullam non ornare nibh. Orci varius natoque penatibus et magnis dis parturient montes,
                            nascetur ridiculus mus.
                        </Grid>
                    </Grid>

                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                    >
                        Submit Application
                    </Button>
                </MaterialUIForm>
            </div>
        </Container>
    );
}