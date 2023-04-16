import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { userState } from '../../types/user.interface'


const initialState: userState = {
    user: false
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<boolean | Object>) => {
            state.user = action.payload
        }
    }
})

export const { setUser } = authSlice.actions

export default authSlice.reducer