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
			list: [],
			page: 0,
			total: 1,
			value: 0,
			allJobs: [],
			page: 1
		}
	}

	componentWillReceiveProps(props){
		this.props = props;
		if(this.props.home.dataReady && this.props.home.jobDataReady){
			this.props.reset()
			this.setState({
				list: this.props.home.allEmployees,
				total: this.props.home.totalEmployeePages,
				allJobs: this.props.home.allJobs
			})
		}
	}

	onPageChange = (page) => {
		this.setState({page});
		let serverObj = {
			page: (page-1)
		}
		if(this.state.value != 0){
			serverObj.jobType = this.state.value
		}
		this.props.getEmployee(serverObj)
	}

	componentWillMount() {
    this.props.getEmployee(0)
		this.props.getJobTypes()
	}

	displayJobs = () => {
		let displayData = []
		displayData.push(<MenuItem key={0} value={0} primaryText="All Jobs"/>)
		this.state.allJobs.map((data,index)=> {
			displayData.push(<MenuItem key={index+1} value={data.id} primaryText={data.type} />)
		})
		return displayData
	}

	handleJobFilter = (event, index, value) => {
		this.setState({value});
		if(value == 0){
			this.props.getEmployee({
				page: this.state.page-1
			})
		}
		else {
			this.props.getEmployee({
				jobType: value
			})
		}
	}
	render(){
		return (
      <div>
				
				<DropDownMenu value={this.state.value} onChange={this.handleJobFilter} openImmediately={false}>
					{
						this.state.allJobs.length > 0 ?
						this.displayJobs()
						:
						<MenuItem value={1} primaryText="No jobs to list" />
					}
			 	</DropDownMenu>
				<Divider />
        <EmployeeList list={this.state.list} getMoreData={this.getMoreData} loading={this.props.home.loading}/>
				<center>
					<UltimatePaginationMaterialUi
						currentPage={this.state.page}
						totalPages={this.state.total}
						onChange={this.onPageChange}
					/>
				</center>
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
