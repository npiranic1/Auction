import React from 'react'
import { Button } from 'react-bootstrap';
import 'components/css/CustomButton.css'
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';

function CustomButton({caption, onClick}) {
  return (  
    <Button className="buttonReact" onClick={onClick}>
        <text className="buttonText">{caption}<ArrowForwardIosSharpIcon className="buttonText"/></text>  
    </Button>
  );
}

export default CustomButton;