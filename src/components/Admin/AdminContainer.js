import React from 'react';
import Alternate from '../AltLayout';
import {Card, CardTitle, CardText} from 'material-ui/Card';
import {Toolbar, ToolbarTitle, ToolbarGroup} from 'material-ui/Toolbar';

import Divider from 'material-ui/Divider';
import {
  Table,
  TableHeader,
  TableRowColumn,
  TableBody,
  TableHeaderColumn,
  TableRow,

} from 'material-ui/Table';
import Checkbox from 'material-ui/Checkbox'
const dTable = [
  {id: 1, name: 'Stamos, John C.', location: 'Alta Vista,Ca', remember: true},
  {id: 2, name: 'Roamij, Rebecca', location: 'Suunyvale,Ca', remember: false},
];
const dtHeaders = ['Id', 'Name', 'Location', 'Remember'];
// eslint-disable-next-line
const PanelEx = props =>
  <Card>
    <Toolbar style={{backgroundColor:'rgb(2,133,150)'}}>
      <ToolbarGroup>
        <ToolbarTitle text="Panel Header" />

      </ToolbarGroup>
    </Toolbar>
    <CardText>Here's sometext.
</CardText>
  </Card>;

const TablEx = props =>
<Card>
<CardTitle > Table Example </CardTitle>
  <Table>
    <TableHeader adjustForCheckbox={false} displaySelectAll={false}>
      <TableRow>
        {dtHeaders.map((val, i) =>
          <TableHeaderColumn>{val}</TableHeaderColumn>
        )}
      </TableRow>
    </TableHeader>
    <TableBody >
      {dTable.map(({id, name, location, remember}, i) =>
        <TableRow rowNumber={i} >
          <TableRowColumn>{id}</TableRowColumn>
          <TableRowColumn>{name}</TableRowColumn>
          <TableRowColumn>{location}</TableRowColumn>
          <TableRowColumn><Checkbox checked={remember} /> </TableRowColumn>{' '}
        </TableRow>
      )}
    </TableBody>
  </Table>
</Card>;

const AdminContent = props =>
  <Alternate>
    <PanelEx />
    <Divider />
    <TablEx />
  </Alternate>;

export default AdminContent;
