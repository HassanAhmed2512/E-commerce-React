import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import TextareaAutosize from '@mui/base/TextareaAutosize';
import joi from "joi-browser";
import { Component } from 'react';
import {Stack , Alert } from '@mui/material';
import axios from 'axios';


const theme = createTheme();

export default class EditProduct extends Component
{
    state = {
        title: "",
        price: "",
        Description: "",
        image: "",
        errors: {}
    }

    schema = {
        title: joi.string().alphanum().min(3).max(30).required(),
        price: joi.string().alphanum().min(3).max(30).required(),
        Description: joi.any().description('this key will match anything you give it'),
    }

    handleSubmit = (event) => {
        event.preventDefault();

    const errors = this.validate();

    if(errors) return;

    // Call Backend
    };

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
    
        const res = joi.validate(this.state , this.schema,{ abortEarly : false});
    
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

    render() {
        return (
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
                    <ShoppingBasketIcon />
                  </Avatar>
                  <Typography component="h1" variant="h5">
                    Edit Product
                  </Typography>
                  <Box component="form" encType='multipart/form-data' onSubmit={this.handleSubmit} noValidate sx={{ mt: 1 }}>
        
                    <TextField
                      margin="normal"
                      required
                      fullWidth
                      onChange={this.handleChange}
                      id="etitle"
                      label="title"
                      name="title"
                      defaultValue="Product Name"
                      autoFocus
                    />

                    {this.state.errors.title &&(
                                <Stack spacing = {2} >
                                <Alert severity='error'>
                                    {this.state.errors.title}
                                </Alert>
                                </Stack>
                                )}

                    <TextareaAutosize
                    maxRows={10}
                    placeholder="Write a description"
                    style={{ width: 400 , height : 100 }}
                    onChange={this.handleChange}
                    name = "Description"
                    id='eDescription'
                    defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                    ut labore et dolore magna aliqua."
                    />

                    <TextField
                      margin="normal"
                      required
                      fullWidth
                      onChange={this.handleChange}
                      name="price"
                      label="Price"
                      type="number"
                      id="ePrice"
                      defaultValue="5000"
                    />
        
        {this.state.errors.price &&(
                                <Stack spacing = {2} >
                                <Alert severity='error'>
                                    {this.state.errors.price}
                                </Alert>
                                </Stack>
                                )}

                    <Stack mt={1} sx={{ border: '1px solid #c4c4c4', borderRadius: '5px', padding: '15px 10px' }} >
                      <input 
                        onChange={this.handleChange}
                        name="image"
                        type="file"
                        multiple
                        accept="image/jpeg, image/png, image/jpg"
                      />
                     </Stack>
        
                    <Button
                      type="submit"
                      fullWidth
                      variant="contained"
                      sx={{ mt: 3, mb: 2 }}
                    >
                      Edit
                    </Button>
                    <Grid container>
        
                    </Grid>
                  </Box>
                </Box>
             
              </Container>
            </ThemeProvider>
          );
    }
    
}