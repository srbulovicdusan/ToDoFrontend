import React, { useState } from 'react';
import {Button, TextField, Card, CardContent, CardActions} from '@material-ui/core';

const HomePage = () =>
{
    
    return (
        <div>
        <h1>Welcome</h1>
        <Button  variant="contained" color="primary"
              onClick={() => window.location.href = "/login"}
          >Login</Button>
        </div>
    )
}
export default HomePage