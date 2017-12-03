import React from 'react';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import {browserHistory} from 'react-router';
import {connect} from "react-redux";
//import {loginUser, checkLogin, resetToNoError} from "./../../actions/loginActions.js";
//import {setErrorMessage} from "./../../actions/errorActions";
//import Auth from './../../Auth.js';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
class App extends React.Component {
  componentWillMount() {

  }

  render() {
    return (
      <MuiThemeProvider>
       <div>
       {/* <Login
       	isLogin={this.props.login.isLogin}
       	token={this.props.login.token}
       	user={this.props.login.loginUser}
          errorText = {this.props.login.errorText}
       	loginUser= {(credential) => this.props.loginUser(credential)}
       	checkLogin= {() => this.props.checkLogin()}
       /> */}
      </div>
    </MuiThemeProvider>
    );
  }
}

const mapStateToProps= (state) => {
	return{

	};
};
const mapDispatchToProps= (dispatch) => {
	return{

	};
};

export default connect(mapStateToProps,mapDispatchToProps)(App);
