import { Card } from '@mui/material'
import React from 'react'
import "../Style/viewpagestyle.css"
import Button from '@mui/material/Button';
import { Link, useLocation } from 'react-router-dom';

function Viewpage() {
  const location = useLocation();
  console.log(location)
  return (
    <div >
    
    <div  className='viewpagfge'>
    
    <Card className='viewCard'>
    <div>
    <h1 className='coler'>{location.state.vtitle}</h1><br/>
        <p>{location.state.tbody}</p>
    </div>
        
        <Button className='btnbk' variant="contained"><Link to="/details" className='uink'> Back</Link></Button>

    </Card>
    </div>
    
    </div>
  )
}

export default Viewpage