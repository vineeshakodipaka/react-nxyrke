import React, { useState } from 'react';
import InputFields from './InputFields';
import Otp from './Otp';
import './style.css'
function App() {
  const [displayOTP, setDisplayOTP] = useState(false)
  const [otpSubmitted, setOtpSubmitted] = useState(false)

  const handleOtpSuccess = () => {
    setOtpSubmitted(true);
  };

  if (otpSubmitted) {
    return <p class="paraform">OTP submitted successfully!</p>
  }

  return (
    <div>
   
      {displayOTP ? (
        <Otp onSuccess={handleOtpSuccess} />
      ) : (
        <InputFields setDisplayOTP={setDisplayOTP} />
      )}
      {/* <img src="https://drive.google.com/uc?export=open&id=1Veqws-Rze7bBovcOiEcu-mnqaiiusCae/view?usp=share_link"/> */}
    </div>

  );
}

export default App;
