import React from 'react';
import {Toolbar, ToolbarGroup, ToolbarTitle} from 'material-ui/Toolbar';
import Main from './MainLayout';

const AltLayout = (props) =>
<div>
  <Main>
    <Toolbar>
      <ToolbarGroup>
        <ToolbarTitle text="Requirments Engine" />
      </ToolbarGroup>
    </Toolbar>
  </Main>
  <div style={{margin:'0 .25%'}}>
  {props.children}
  </div>
</div>;
export default AltLayout;
