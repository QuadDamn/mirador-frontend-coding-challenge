const apiBackendMockCall = (autoPurchasePrice, autoMake, autoModel, userEstimatedYearlyIncome, userEstimatedCreditScore) => {
    return new Promise((res, rej) => {
        if (parseInt(autoPurchasePrice) > 1000000) {
            res({
                status: 400,
                statusText: 'The purchase price of the vehicle cannot exceed $1,000,000.'
            });
        } else if (parseInt(userEstimatedCreditScore) < 600) {
            res({
                status: 400,
                statusText: 'Your credit score is too low.'
            });
        } else if (parseInt(autoPurchasePrice) > (parseInt(userEstimatedYearlyIncome) * 0.2)) {
            res({
                status: 400,
                statusText: 'The purchase price of the vehicle is more than one-fifth your yearly income.'
            });
        } else {
            res({
                status: 200,
                statusText: 'OK'
            });
        }
    });
};

export {apiBackendMockCall};