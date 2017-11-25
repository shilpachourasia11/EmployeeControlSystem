import {createStore,combineReducers,applyMiddleware} from 'redux'
import logger from 'redux-logger'
import promise from 'redux-promise-middleware'
import homeReducer from './reducer/homeReducer'
import {routerReducer} from 'react-router-redux'

export default createStore(
    combineReducers({
    	homeReducer,
      routing: routerReducer,
  	}),
    {},
    applyMiddleware(promise())
)
