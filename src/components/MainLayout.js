import React from 'react';
import AppBar from 'material-ui/AppBar';

const MainLayout = (props) => (
      <div>
        <AppBar title="Nike Privacy" showMenuIconButton={false}/>
        {props.children}
      </div>
    );

export default MainLayout;
