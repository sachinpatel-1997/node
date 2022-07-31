import React from "react";
 import PropTypes from "prop-types";
 import { connect } from "react-redux";
import Read from "./Read";
import FilesUploadComponent from "./files-upload-component";

const Dashboard = ({ auth: { user } }) => {
 
	return (
		
	<>
		<FilesUploadComponent/>
		<Read/>
	</>
		
		
		   
	)
};
Dashboard.propTypes = {
	auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
	auth: state.auth,
});

export default connect(mapStateToProps)(Dashboard);

