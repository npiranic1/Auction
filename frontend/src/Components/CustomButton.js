import React from 'react'
import { Button } from 'react-bootstrap';
import './CustomButton.css'
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';

function CustomButton() {
  return (
    <>    
    <Button className="buttonReact">
        <text className="buttonText">BID NOW <ArrowForwardIosSharpIcon className="buttonText"/></text>  
    </Button>
    </>
  );
}

export default CustomButton;