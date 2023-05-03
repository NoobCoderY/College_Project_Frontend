import {configureStore} from '@reduxjs/toolkit';
import filterReducers from './filterSlice/index';
import userReducers from './userSlice/index'



const store=configureStore({
    reducer:{
        filters:filterReducers,
        user:userReducers,
       
    }
})

export default store;