import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import {
  Button,
  TextField,
  CssBaseline,
  Grid,
  Typography,
  Container,
  Avatar,
  InputAdornment,
} from '@material-ui/core';
import DirectionsCarIcon from '@material-ui/icons/DirectionsCar';
import { makeStyles } from '@material-ui/core/styles';
import Helmet from 'react-helmet';
import CurrencyTextField from '@unicef/material-ui-currency-textfield';
import { apiBackendMockCall } from '../utils/api';

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
  const [autoPurchasePriceValue, setAutoPurchasePriceValue] = useState();
  const [autoMakeValue, setAutoMakeValue] = useState();
  const [autoModelValue, setAutoModelValue] = useState();
  const [
    userEstimatedYearlyIncomeValue,
    setUserEstimatedYearlyIncomeValue,
  ] = useState();
  const [
    userEstimatedCreditScoreValue,
    setUserEstimatedCreditScoreValue,
  ] = useState();

  const [autoPurchasePriceErrorText, setAutoPurchasePriceErrorText] = useState(
    ''
  );
  const [autoMakeErrorText, setAutoMakeErrorText] = useState('');
  const [autoModelErrorText, setAutoModelErrorText] = useState('');
  const [
    userEstimatedYearlyIncomeErrorText,
    setUserEstimatedYearlyIncomeErrorText,
  ] = useState('');
  const [
    userEstimatedCreditScoreErrorText,
    setUserEstimatedCreditScoreErrorText,
  ] = useState('');

  const [submitButtonText, setSubmitButtonText] = useState();
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);

  const [apiResponse, setApiResponse] = useState();
  const [redirect, setRedirect] = useState(false);

  const classes = useStyles();

  const handleFormSubmit = async event => {
    event.preventDefault();

    let errorFound = false;

    setSubmitButtonText('Processing...');
    setSubmitButtonDisabled(true);

    setAutoPurchasePriceErrorText('');
    setAutoMakeErrorText('');
    setAutoModelErrorText('');
    setUserEstimatedYearlyIncomeErrorText('');
    setUserEstimatedCreditScoreErrorText('');

    if (!autoPurchasePriceValue) {
      errorFound = true;
      setAutoPurchasePriceErrorText('Field must have a value.');
    }

    if (!autoMakeValue) {
      errorFound = true;
      setAutoMakeErrorText('Field must have a value.');
    }

    if (!autoModelValue) {
      errorFound = true;
      setAutoModelErrorText('Field must have a value.');
    }

    if (!userEstimatedYearlyIncomeValue) {
      errorFound = true;
      setUserEstimatedYearlyIncomeErrorText('Field must have a value.');
    }

    if (!userEstimatedCreditScoreValue) {
      errorFound = true;
      setUserEstimatedCreditScoreErrorText('Field must have a value.');
    } else if (
      parseInt(userEstimatedCreditScoreValue) < 300 ||
      parseInt(userEstimatedCreditScoreValue) > 850
    ) {
      errorFound = true;
      setUserEstimatedCreditScoreErrorText(
        'Credit score must be between 300 and 850.'
      );
    }

    // If no errors were found, continue the form submission.
    if (!errorFound) {
      // Simulate API call.
      const response = await apiBackendMockCall(
        autoPurchasePriceValue,
        autoMakeValue,
        autoModelValue,
        userEstimatedYearlyIncomeValue,
        userEstimatedCreditScoreValue
      );

      setApiResponse(response);
      setRedirect(response.status === 200 ? '/new-account' : '/disqualified');
    } else {
      // Set the Submit Button back to its default state so the user can submit again after correcting the errors.
      setSubmitButtonDisabled(false);
      setSubmitButtonText('');
    }
  };

  return (
    <div>
      {redirect ? (
        <Redirect
          to={{
            pathname: redirect,
            state: { statusText: apiResponse.statusText },
          }}
        />
      ) : (
        ''
      )}

      <Container component="main" maxWidth="xs">
        <Helmet>
          <title>Qualification Form for Auto Loan</title>
        </Helmet>

        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <DirectionsCarIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Qualification Form for Auto Loan
          </Typography>
          <form
            className={classes.form}
            onSubmit={event => handleFormSubmit(event)}
          >
            <CurrencyTextField
              variant="outlined"
              margin="normal"
              fullWidth
              id="auto-purchase-price"
              label="Auto Purchase Price"
              name="auto-purchase-price"
              textAlign="left"
              value={autoPurchasePriceValue}
              onChange={(event, value) => setAutoPurchasePriceValue(value)}
              helperText={autoPurchasePriceErrorText}
              error={!!autoPurchasePriceErrorText}
            />

            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              id="auto-make"
              label="Auto Make"
              name="auto-make"
              value={autoMakeValue}
              onChange={event => setAutoMakeValue(event.target.value)}
              InputProps={{
                startAdornment: <InputAdornment position="start" />,
              }}
              helperText={autoMakeErrorText}
              error={!!autoMakeErrorText}
            />

            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              id="auto-model"
              label="Auto Model"
              name="auto-model"
              value={autoModelValue}
              onChange={event => setAutoModelValue(event.target.value)}
              InputProps={{
                startAdornment: <InputAdornment position="start" />,
              }}
              helperText={autoModelErrorText}
              error={!!autoModelErrorText}
            />

            <CurrencyTextField
              variant="outlined"
              margin="normal"
              fullWidth
              id="user-estimated-yearly-income"
              label="User Estimated Yearly Income"
              name="user-estimated-yearly-income"
              textAlign="left"
              value={userEstimatedYearlyIncomeValue}
              onChange={(event, value) =>
                setUserEstimatedYearlyIncomeValue(value)
              }
              helperText={userEstimatedYearlyIncomeErrorText}
              error={!!userEstimatedYearlyIncomeErrorText}
            />

            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              name="user-estimated-credit-score"
              label="User Estimated Credit Score"
              id="user-estimated-credit-score"
              value={userEstimatedCreditScoreValue}
              onChange={event =>
                setUserEstimatedCreditScoreValue(event.target.value)
              }
              InputProps={{
                startAdornment: <InputAdornment position="start" />,
              }}
              helperText={userEstimatedCreditScoreErrorText}
              error={!!userEstimatedCreditScoreErrorText}
            />

            <Grid container>
              <Grid item xs>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                placerat ante id elit cursus, a interdum nunc venenatis. Cras
                nulla nibh, euismod non turpis a, ullamcorper f eugiat leo.
                Pellentesque elementum sapien tellus, quis blandit tortor
                malesuada eget. Integer vel neque in dolor euismod fermentum et
                a nulla. Pellentesque ultricies est dignissim malesuada aliquet.
                Nullam non ornare nibh. Orci varius natoque penatibus et magnis
                dis parturient montes, nascetur ridiculus mus.
              </Grid>
            </Grid>

            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              disabled={submitButtonDisabled}
            >
              {submitButtonText ? submitButtonText : 'Submit Application'}
            </Button>
          </form>
        </div>
      </Container>
    </div>
  );
}
