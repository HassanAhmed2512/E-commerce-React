import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Component } from 'react';
import joi from "joi-browser";
import {Stack , Alert } from '@mui/material';
import axios from 'axios';
import { type } from '@testing-library/user-event/dist/type';

  const theme = createTheme();

export default class EditAdmin extends Component
{
  state = {
    First: "",
    Second: "",
    Email: "",
    Password: "" ,
    id: "",
    errors: {}
  }
  schema = {

    First: joi.string().required(),
    Second: joi.string().required(),
    Email: joi.string().email().required(),
    Password: joi.string().min(4).max(20).required(),

  }

  async componentDidMount()
  {
    const id = this.props.id ?? 0;

    const response = (await axios.get(`http://localhost:3000/response`)).data;

    if(response.success) this.setState({...response.payload.product})
    // console.log(this.state)
  }
  
  

  handleSubmit1 = async (event) => {
    event.preventDefault();

    const errors = this.validate();

    if(errors) return;

    // Call Backend

    const obj = {...this.state};

    //Delete Id

    delete obj.id;

    await axios.put('http://localhost:3000/products/'+this.state.id,this.state);

  }
  handleChange = e => {

    // //Clone
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
      this.setState({errors: {}})
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

    let y = this.state.First.toString();
    console.log(typeof y)
    console.log("from render", this.state)
    return(
      <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <PersonAddAltIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Edit Admin
          </Typography>
          <Box component="form" onSubmit={this.handleSubmit1} noValidate sx={{ mt: 1 }}>

            <TextField
              required
              onChange={this.handleChange}  
              name="id"
              type="hidden"
              defaultValue={this.state.First}
              autoFocus
            />
            
            <TextField
              margin="normal"
              required
              fullWidth
              onChange={this.handleChange}
              id="aFirst Name"  
              label="First Name"
              name="First"
              type="text"
              defaultValue={this.state.First}
              autoFocus
            />

            {this.state.errors.First &&(
              <Stack spacing = {2} >
              <Alert severity='error'>
                {this.state.errors.First}
              </Alert>
            </Stack>
            )}
            

            <TextField
              margin="normal"
              required
              fullWidth
              onChange={this.handleChange}
              name="Second"
              label="Second Name"
              type="text"
              id="aSecond Name"
              defaultValue={this.state.Second}
            />

{this.state.errors.Second &&(
              <Stack spacing = {2} >
              <Alert severity='error'>
                {this.state.errors.Second}
              </Alert>
            </Stack>
            )}

            <TextField
              margin="normal"
              required
              fullWidth
              onChange={this.handleChange}
              name="Email"
              label="Email"
              type="email"
              id="aEmail"
              defaultValue={this.state.Email}
            />

            {this.state.errors.Email &&(
            <Stack spacing = {2} >
              <Alert severity='error'>
                {this.state.errors.Email}
              </Alert>
            </Stack>
            )}

            <TextField
              margin="normal"
              required
              fullWidth
              onChange={this.handleChange}
              name="Password"
              label="Password"
              type="password"
              id="aPassword"
              defaultValue={this.state.Password}
            />

{this.state.errors.Password &&(
              <Stack spacing = {2} >
              <Alert severity='error'>
                {this.state.errors.Password}
              </Alert>
            </Stack>
            )}

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Add
            </Button>
            <Grid container>

            </Grid>
          </Box>
        </Box>
     
      </Container>
    </ThemeProvider>
      
    )
  }
}