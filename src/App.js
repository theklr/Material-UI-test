import React from 'react';
import MultiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Admin from './components/Admin/AdminContainer';
// const isMain = false;

const App = () =>
  <MultiThemeProvider>
    <Admin style={{display:'flex'}}/>
  </MultiThemeProvider>;

export default App;
