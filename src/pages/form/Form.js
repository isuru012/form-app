
import * as React from 'react';
import { useState } from 'react';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Swal from 'sweetalert2';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import FormControl from '@mui/material/FormControl';
import Image from '../../assests/images/formbg.png';





function Form() {
    const [email, setEmail] = useState('');
  const [isValidEmail, setIsValidEmail] = useState(false);

  const [name, setName] = useState('');
  const [isValidName, setIsValidName] = useState(false);

  const [phoneNumber, setPhoneNumber] = useState('');
  const [isValidPhoneNumber, setIsValidPhoneNumber] = useState(false);

  const [password, setPassword] = useState('');
  const [isValidPassword, setIsValidPassword] = useState(false);

  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  function handleInputChangePassword(event) {
    const inputValue = event.target.value;
    setPassword(inputValue);

    const passwordRegex =/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$#!%*?&])[A-Za-z\d@$#!%*?&]{8,}$/    ;
    setIsValidPassword(passwordRegex.test(inputValue));
  }


  function handleInputChangePhoneNumber(event) {
    const inputValue = event.target.value;
    setPhoneNumber(inputValue);

    const phoneNumberRegex =/^(?:\+94|0)?(?!0)(\d{9})$/    ;
    setIsValidPhoneNumber(phoneNumberRegex.test(inputValue));
  }


  function handleInputChangeName(event) {
    const inputValue = event.target.value;
    setName(inputValue);

    const nameRegex = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
    setIsValidName(nameRegex.test(inputValue));
  }

  function handleButtonSubmit(event) {
    if(isValidName){
        if(isValidEmail){
            if(isValidPassword){
                if(isValidPhoneNumber){
                    Swal.fire({
                        icon: 'success',
                        title: 'Saved',
                        text: 'Thank You For Your Time',
                        
                      })
                }else{
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Please Fill All Fields Correctly',
                      })
                }
            }else{
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Please Fill All Fields Correctly',
                  })
            }
        }else{
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Please Fill All Fields Correctly',
              })
        }
    }else{
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Please Fill All Fields Correctly',
          })
    }
  }




  function handleInputChangeEmail(event) {
    const inputValue = event.target.value;
    setEmail(inputValue);

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setIsValidEmail(emailRegex.test(inputValue));
  }

    return (
          <Card sx={{ minWidth: 275 ,position: 'absolute',
          left: 0,
          right: 0,
          margin: 'auto',
          width: '50vw',
          height: '60vh',
          top: 0,
          bottom: 0,backgroundImage:`url(${Image})`}}>
      <CardContent>
      <TextField id="standard-basic" label="Enter Your Name" variant="standard" sx={{ width:'60%',position:'absolute',right:'7%',top:'15%'}} value={name} onChange={handleInputChangeName}/>
      {!isValidName && name.length > 0 && <span style={{color:'red',position:'absolute',right:'7%',top:'27%'}}>Please enter a valid Name.</span>}

        <Typography sx={{ fontSize: 25,fontWeight:'bold',color:'black',position:'absolute',left:'4%',top:'18%' }} color="text.secondary" gutterBottom>
          Name :
        </Typography>
        <TextField id="standard-basic2" label="Enter Your Email" variant="standard" sx={{ width:'60%',position:'absolute',right:'7%',top:'30%'}} value={email} onChange={handleInputChangeEmail}/>
        {!isValidEmail && email.length > 0 && <span style={{color:'red',position:'absolute',right:'7%',top:'42%'}}>Please enter a valid email address.</span>}
        <Typography sx={{ fontSize: 25,fontWeight:'bold',color:'black',position:'absolute',left:'4%',top:'33%' }} color="text.secondary" gutterBottom>
          Email :
        </Typography>
        

        <TextField id="standard-basic3" label="Enter Your PhoneNumber" variant="standard" sx={{ width:'60%',position:'absolute',right:'7%',top:'45%'}} value={phoneNumber} onChange={handleInputChangePhoneNumber}/>
        {!isValidPhoneNumber && phoneNumber.length > 0 && <span style={{color:'red',position:'absolute',right:'7%',top:'57%'}}>Please enter a valid PhoneNumber.</span>}

        <Typography sx={{ fontSize: 25,fontWeight:'bold',color:'black',position:'absolute',left:'4%',top:'48%' }} color="text.secondary" gutterBottom>
          PhoneNumber :
        </Typography>

       
        {!isValidPassword && password.length > 0 && <span style={{color:'red',position:'absolute',right:'7%',top:'72%',width:'60%'}}>Please enter a Password Contains atleast One(lowercase letter,
        uppercase letter,special character,digit) and 8 or more characters.</span>}

        <Typography sx={{ fontSize: 25,fontWeight:'bold',color:'black',position:'absolute',left:'4%',top:'63%' }} color="text.secondary" gutterBottom>
        Password :
        </Typography>

        <FormControl sx={{ m: 1,width:'60%',position:'absolute',right:'6%',top:'60%' }} variant="standard">
          <InputLabel htmlFor="standard-adornment-password">Enter Your Password</InputLabel>
          <Input
            id="standard-adornment-password"
            type={showPassword ? 'text' : 'password'}
            value={password} onChange={handleInputChangePassword}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
        
      </CardContent>
      <CardActions>
        <Button size="medium" variant="contained" sx={{ width:'20%',position:'absolute',right:'0',left:0,bottom:'10px',margin:'auto',backgroundColor:'green'} } onClick={handleButtonSubmit} >Submit</Button>
      </CardActions>
    </Card>
    );
}


export default Form;
