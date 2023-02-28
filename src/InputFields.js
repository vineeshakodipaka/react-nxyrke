import React, { useState } from 'react';
import {Col,Row,Container,Card,Button,Form} from 'react-bootstrap';

function Inputfields(props) {
  const [centerId, setCenterId] = useState('');
  const [milkAmount, setMilkAmount] = useState('');
  const [quality, setQuality] = useState('');
  const [error, setError] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!centerId || !milkAmount || !quality) {
      setError('Please fill all the fields.')
      
      return;

    }

    const formData = {
      centerId,
      milkAmount,
      quality,
    };
    localStorage.setItem('formData', JSON.stringify(formData));
    props.setDisplayOTP(true);
  };
  const handleButtonClick = (e) => {
    e.preventDefault();
    handleSubmit(e);
    console.log("centerId",centerId,"milAmount",milkAmount,"quality",quality)
  }

  return (
   <div class="row1">
   <Row className="formconent ">
   
    <Form style={{marginTop:"150px"}}  onSubmit={handleSubmit} className="sm-12" >
       <Form.Label>  Chilling Center ID:</Form.Label>
    <Form.Control className="form1" required type="text" value={centerId} onChange={(e) => setCenterId(e.target.value)}/><br/>
     <Form.Label>  Amount of Milk Received:</Form.Label>
    
    <Form.Control className="form1"  requiredtype="text" value={milkAmount} onChange={(e) => setMilkAmount(e.target.value)}/><br/>
     <Form.Label>   Quality:</Form.Label>
 
  <Form.Select  value={quality} onChange={(e) => setQuality(e.target.value)}  menuPlacement="bottom" className="w-100"  >
  
  <option value=""></option>
    
      <option value="A1">A1</option>
      <option value="A2">A2</option>
      <option value="A3">A3</option>
 
  
      <option value="B1">B1</option>
      <option value="B2">B2</option>
      <option value="B3">B3</option>
  
     {/* <optgroup label="C Quality"> */}
      <option value="C1">C1</option>
      <option value="C2">C2</option>
      <option value="C3">C3</option>
 
  </Form.Select><br/>

   <Button type="submit" className='btnread' onClick={handleButtonClick}>SUBMIT</Button>
     </Form>
     </Row>
     </div>
  );
}

export default Inputfields;
