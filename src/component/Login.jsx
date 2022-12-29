import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import joi from "joi-browser";
import {Stack , Alert } from '@mui/material';
import axios from 'axios';
import { Component } from 'react';


const theme = createTheme();


export default class Login  extends Component
{
 
  state = {
    email: "",
    password: "" ,
    errors:{}
  }

  schema = {
    email: joi.string().email().required(),
    password: joi.string().min(6).max(20).required(),

  }

  handleSubmit1 = async (event) => {
    event.preventDefault();

    const errors = this.validate();

    if(errors) return;

    // Call Backend

    await axios.post('http://localhost:3000/products/',this.state);


  }

  handleChange = e => {

    //Clone
    let state = {...this.state};
    //Edit
    state[e.currentTarget.name] = e.currentTarget.value;
    //setState
    this.setState(state);

  }

  validate = () =>{
    const errors = {};

    const state = {...this.state};
    delete state.errors;

    const res = joi.validate(this.state , this.schema, {abortEarly: false});

    if (res.errors === null)
    {
      this.setState({errors:{}})
      return null;
    }

    for(const error of res.error.details)
    {
      errors[error.path] = error.message;
    }

    // set state

    this.setState({errors});

  }
  
  render()
  {
    return (
      <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography
              component="h1"
              variant="h5"
              style={{ textDecoration: "none" }}
            >
              Sign in
            </Typography>
            <Box
              component="form"
              onSubmit={this.handleSubmit1}
              noValidate
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                onChange={this.handleChange}
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />
                          {this.state.errors.email &&(
              <Stack spacing = {2} >
              <Alert severity='error'>
                {this.state.errors.email}
              </Alert>
            </Stack>
            )}
              <TextField
                margin="normal"
                required
                fullWidth
                onChange={this.handleChange}
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
                          {this.state.errors.password &&(
              <Stack spacing = {2} >
              <Alert severity='error'>
                {this.state.errors.password}
              </Alert>
            </Stack>
            )}
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
              
              <Grid container>
                <Grid item xs>
         <Link to="/ForgetPassword" style={{textDecoration: 'none',color: "blue" }}  > Forgot password? </Link>              
                </Grid>
                <Grid item>
                Don't have an account ?&nbsp; &nbsp; 
                  <Link
                    to="/Register"
                    style={{ textDecoration: "none" , color: "blue" }}
                  >
                     Sign Up 
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
    );
  }
}