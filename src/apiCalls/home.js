import axios from 'axios'
import serverAddress from './config';

const utils = {
  getEmployee: (data) => {
		let url = serverAddress + "/api/employee/getData?page=" + (data.page ? data.page : 0 );
    if(data.jobType){
      url = url + "&job_type=" + data.jobType
    }
		return axios.get(url);
	},
  getJobTypes: () => {
    let url = serverAddress + "/api/job/getJobTypes";
		return axios.get(url);
  }
}

export default utils;
