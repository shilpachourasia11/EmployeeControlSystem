import React from 'react';
import {getEmployee,reset,getJobTypes} from "./../../actions/homeActions";
import {connect} from "react-redux";
import {Tabs, Tab} from 'material-ui/Tabs';
import EmployeeList from './../../components/employeeList/employeeList'
import UltimatePaginationMaterialUi from '../../components/Table';
import Divider from 'material-ui/Divider';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';

class App extends React.Component{
	constructor(props) {
		super(props);
		this.props = props;
		this.state={
			allJobs: [],
		}
	}

	componentWillReceiveProps(props){
		this.props = props;
		if(this.props.home.jobDataReady){
			this.props.reset()
			this.setState({
				allJobs: this.props.home.allJobs
			})
		}
	}

	componentWillMount() {
		this.props.getJobTypes()
	}

	render(){
		return (
      <div>
        HELLOOOOOOOO
      </div>
		)
	}
}

const mapStateToProps= (state) => {
	return{
		home: state.homeReducer,
	};
};

const mapDispatchToProps= (dispatch) => {
	return{
		getEmployee: (data) => {
			dispatch(getEmployee(data))
		},
		reset: () => {
			dispatch(reset())
		},
		getJobTypes: () => {
			dispatch(getJobTypes())
		}
	};
};


export default connect(mapStateToProps, mapDispatchToProps)(App);
