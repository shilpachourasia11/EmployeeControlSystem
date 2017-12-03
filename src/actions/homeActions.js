import * as types from './../constants'
import home from './../apiCalls/home'

export function getEmployee(data) {
  return {
    type: types.ALL_EMPLOYEE,
    payload: home.getEmployee(data)
      .then( response => {
        return response.data;
      } )
  }
}

export function reset(){
  return {
    type: types.RESET
  }
}

export function getJobTypes(){
  return {
    type: types.GET_JOBS,
    payload: home.getJobTypes()
      .then( response => {
        return response.data;
      })
  }
}
