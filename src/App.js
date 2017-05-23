import React from 'react';
import MultiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import Toolbar from'material-ui/Toolbar'
import Typography from 'material-ui/Typography'
import Grid from 'material-ui/Grid';

const App = () => (
  <MultiThemeProvider>
    <Grid md={10} containter justify="center" >
    <AppBar>
    <Toolbar>
    <Typography type="title" colorInherit> Cheesesteak </Typography>
    </Toolbar>
    
    </AppBar>
    </Grid>
  </MultiThemeProvider>
);

export default App;
