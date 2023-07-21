import React, { useState } from 'react';
import Button from '@mui/material/Button';
import './App.css';
import { Rating, Typography } from '@mui/material';

function App() {
  const [value, setValue] = useState(2);

  return (
    <div className='App'>
      <header className='App-header'>
        <h1>Hello World App</h1>
        <Button variant='contained'>Hello World</Button>
        <Typography component={'legend'}>Hello Typography</Typography>
        <Rating
          name='simple-controlled'
          value={value}
          onChange={( event,newValue) => {
            setValue(newValue);
          }}
        />
      </header>
    </div>
  );
}

export default App;
