import authReducer from './authReducer'
import projectReducer from './projectReducer'
import {combineReducers} from 'redux'
import { firestoreReducer } from 'redux-firestore'
import { firebaseReducer} from 'react-redux-firebase'
import userReducer from './usersReducer'

const rootReducer = combineReducers({
    auth: authReducer,
    project: projectReducer, // We will connect our components with Redux using "connect". It's useless actually...,
    user: userReducer,
    firestore: firestoreReducer, // We will connect our components with Firebase using "firebaseConnect"
    firebase: firebaseReducer // It's responsible for the authentication
})

export default rootReducer