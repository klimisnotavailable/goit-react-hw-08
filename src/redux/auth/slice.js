import { createSlice } from "@reduxjs/toolkit";
import { login, register, logout, refresh } from "./operations";

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
            state.user = action.payload.user;
            state.token = action.payload.token
        })
        .addCase(register.rejected,(state)=>{
            state.isLoggedIn = false;
        })
        .addCase(login.fulfilled, (state,action)=>{
            state.isLoggedIn = true;
            state.user = action.payload.user;
            state.token = action.payload.token;
        })
        .addCase(login.rejected,(state)=>{
            state.isLoggedIn = false;
        }).addCase(refresh.pending,(state)=>{
            state.isRefreshing = true;
        })
        .addCase(refresh.fulfilled,(state,action)=>{
            state.isRefreshing = false;
            state.isLoggedIn = true;
            state.user = action.payload;
        }).addCase(refresh.rejected,(state)=>{
            state.isRefreshing = false;
        }).addCase(logout.fulfilled,(state)=>{
            // state.user.name = null;
            // state.user.email = null;
            state.isLoggedIn = false;
            state.token = null
        })
    }
});

export default slice.reducer;