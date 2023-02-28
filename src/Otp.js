import React, { useState } from 'react';
import {Col,Row,Container,Card,Button,Form} from 'react-bootstrap';

function Otp(props) {
  const [otp, setOTP] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (otp.length !== 6 || isNaN(otp)) {
      setError('Please enter a valid 6 digit OTP');
    } else {
      setError('');
      // Send POST request to server with OTP
      props.onSuccess();
    }
  };

  return (


    <div class="formconent">
  <>
  <div class="otppage">
   <p >An OTP has been sent to your phone. Please enter it below:</p>
    <Form className="formconent"   onSubmit={handleSubmit} className="mb-5">
      
    <Form.Control className="form1"  type="text" value={otp} onChange={(e) => setOTP(e.target.value)} /><br/>
    
      <span style={{ color: 'red' }}>{error}</span>
      <br />
    
      <Button type="submit" className='btnread' >SUBMIT</Button>

    </Form>
    </div>
  </>
   </div>
  );
}

export default Otp;

