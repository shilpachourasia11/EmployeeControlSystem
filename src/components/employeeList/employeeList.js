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
          <TableRowColumn>{data.work_space.name}</TableRowColumn>
          <TableRowColumn>{data.work_space.capacity}</TableRowColumn>
          <TableRowColumn>{data.work_space.type}</TableRowColumn>
          <TableRowColumn>{data.work_space.availability == true ? "Available":"Booked"}</TableRowColumn>
        </TableRow>
      )
    })
    return list
  }

  handleRowSelection = (row) => {
    this.setState({
      selectedRow: this.props.list[row],
      openPopUp: true
    })
  }

  closePopUp = () => {
    this.setState({
      openPopUp: false
    })
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
        <Table onRowSelection={this.handleRowSelection}>
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

        <Dialog
          title="Work Space Information"
          actions={actions}
          modal={false}
          open={this.state.openPopUp}
          onRequestClose={this.closePopUp}
        >
          <List>
            <ListItem
              primaryText="Monthly Rating"
              secondaryText={this.state.selectedRow != null ? "Rs " + this.state.selectedRow.monthly : "Rate Unavailable"}
            />
            <ListItem
              primaryText="Daily Rates"
              secondaryText={this.state.selectedRow != null ? "Rs " +  this.state.selectedRow.daily : "Rate Unavailable"}
            />
            <ListItem
              primaryText="Hourly Rates"
              secondaryText={this.state.selectedRow != null ? "Rs " + this.state.selectedRow.hourly : "Rate Unavailable"}
            />
          </List>
          <Toggle
            label="Toggle to change availability"
            defaultToggled={true}
            onToggle={this.changeAvailability}
          />
          {
            this.props.loading?
            "Loading..."
            : null
          }
        </Dialog>
      </div>
      );
   }
}


export default EmployeeList;
