import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import AddressForm from './AddressForm';
import PaymentForm from './PaymentForm';
import Review from './Review';
import { Joi } from 'joi-browser';




const steps = ['Shipping address', 'Review your order', 'Payment details'];



const theme = createTheme();

export default function Checkout() {
    const [firstname, setfirstname] = React.useState('');
    const [secondname, setsecondname] = React.useState('');
    const [addressline, setaddressline] = React.useState('');
    const [city, setcity] = React.useState('');
    const [state, setstate] = React.useState('');
    const [zip, setzip] = React.useState('');
    const [country, setcountry] = React.useState('');
    const [cardName, setCardName] = React.useState('');
    const [cardNumber, setCardNumber] = React.useState('');
    const [expDate, setExpDate] = React.useState('');
    const [cvv, setCvv] = React.useState('');
  const [activeStep, setActiveStep] = React.useState(0);

  function getStepContent(step) {
    switch (step) {
      case 0:
        return <AddressForm
         setfirstname={setfirstname}
         setsecondname={setsecondname}
         setaddressline={setaddressline}
         setcity={setcity}
         setstate={setstate}
         setzip={setzip}
         setcountry={setcountry}

          />;
      case 1:
        return <Review 
        firstname={`${firstname}`}
        secondname={`${secondname}`}
        addressline={`${addressline}`}
        city={`${city}`}
        state={`${state}`}
        zip={`${zip}`}
        country={`${country}`}
        cardName={`${cardName}`}
        expDate={`${expDate}`}
        cardNumber={`${cardNumber}`}
        />;
        case 2:
            return <PaymentForm 
            setCardName={setCardName}
            setCardNumber={setCardNumber}
            setExpDate={setExpDate}
            setCvv={setCvv}/>;
      default:
        throw new Error('Unknown step');
    }
  }

  const handleNext = () => {
    setActiveStep(activeStep + 1);
    console.log(firstname)
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
        <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
          <Typography component="h1" variant="h4" align="center">
            Checkout
          </Typography>
          <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          {activeStep === steps.length ? (
            <React.Fragment>
              <Typography variant="h5" gutterBottom>
                Thank you for your order.
              </Typography>
              <Typography variant="subtitle1">
                Thank you for chocing our website. We have emailed your order
                confirmation, and will send you an update when your order has
                shipped.
              </Typography>
            </React.Fragment>
          ) : (
            <React.Fragment>
              {getStepContent(activeStep)}
              <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                {activeStep !== 0 && (
                  <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                    Back
                  </Button>
                )}

                <Button
                  variant="contained"
                  onClick={handleNext}
                  sx={{ mt: 3, ml: 1 }}
                >
                  {activeStep === steps.length - 1 ? 'Place order' : 'Next'}
                 </Button>
              </Box>
            </React.Fragment>
          )}
        </Paper>
      </Container>
    </ThemeProvider>
  );
}