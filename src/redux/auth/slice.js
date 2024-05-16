import { createSlice } from "@reduxjs/toolkit";
import { register } from "./operations";

const slice = createSlice({
    name: "auth",
    initialState: {
        user: { name: null, email: null, },
        token: null,
        isLoggedIn: false,
        isRefreshing: false,
    },
    extraReducers: (builder) =>{
        builder.addCase(register.fulfilled,(state,action)=>{
            state.isLoggedIn = true;
            state.user = action.payload;
            console.log(action)
        })
    }
});

export default slice.reducer;

