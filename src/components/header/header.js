import React from 'react';
import AppBar from 'material-ui/AppBar';

class Header extends React.Component {
  constructor(props) {
		super(props);
	}

   render() {
     return (
      <div>
        <AppBar
          title="Manage Your Employees"
        />
      </div>
      );
   }
}

export default Header;
