import { configureStore } from '@reduxjs/toolkit';
import reducerUser from './reducers/userReducer';

export const store = configureStore({
    reducer:{
        user:reducerUser
    }
})