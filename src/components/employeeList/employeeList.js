import React from 'react';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import Toggle from 'material-ui/Toggle';
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';

class EmployeeList extends React.Component {
  constructor(props) {
		super(props);
    this.state = {
      openPopUp: false,
      selectedRow: null
    }
	}
  componentWillReceiveProps(props){
    this.props = props
  }
  displayList = () => {
    let list = []
    this.props.list.map((data, index)=> {
      list.push(
        <TableRow>
          <TableRowColumn>{data.employee.name}</TableRowColumn>
          <TableRowColumn>{data.employee.age}</TableRowColumn>
          <TableRowColumn>{data.employee.salary}</TableRowColumn>
          <TableRowColumn>{data.type}</TableRowColumn>
        </TableRow>
      )
    })
    return list
  }

  changeAvailability = (e, value) => {
    this.props.changeAvailability(this.state.selectedRow)
  }

   render() {
       const actions = [
        <FlatButton
          label="Close"
          primary={true}
          onClick={this.closePopUp}
        />,
      ];

      return (
        <div id="enclosingDiv">
        <Table>
          <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
            <TableRow>
              <TableHeaderColumn>Name</TableHeaderColumn>
              <TableHeaderColumn>Age</TableHeaderColumn>
              <TableHeaderColumn>Salary</TableHeaderColumn>
              <TableHeaderColumn>Job Status</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody deselectOnClickaway={false} displayRowCheckbox={false}>
            {
              this.props.list.length > 0 ?
              this.displayList()
              : "No data"
            }
          </TableBody>
        </Table>
      </div>
      );
   }
}


export default EmployeeList;
