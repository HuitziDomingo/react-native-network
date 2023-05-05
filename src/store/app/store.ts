import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../slice/Auth/authReducer'


export const store = configureStore({
    reducer: {
        auth: authReducer
    }
})

