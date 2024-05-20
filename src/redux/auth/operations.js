import axios from 'axios';
import { createAsyncThunk } from "@reduxjs/toolkit";

const setAuthToken = token => {
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
}

const deleteAuthToken = () =>{
    axios.defaults.headers.common["Authorization"] = "";
}

export const register = createAsyncThunk("auth/register", async (newContact, thunkAPI) => {
    try {
        const response = await axios.post("users/signup", newContact);
        setAuthToken(response.data.token)
        return response.data;
    } catch (error) {
       return thunkAPI.rejectWithValue(error.message);
    }
});

export const login = createAsyncThunk("auth/login",async (userData,thunkAPI)=>{
    try {
        const response = await axios.post("users/login",userData);
        setAuthToken(response.data.token)
        return response.data;
    } catch (error) {
       return thunkAPI.rejectWithValue(error.message);
    }
});

export const logout = createAsyncThunk("auth/logout", async (_,thunkAPI)=>{
    try {
        const response = await axios.post("users/logout");
        deleteAuthToken();
        return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
});

export const refresh = createAsyncThunk(
    "auth/refresh", 
    async(_,thunkAPI)=>{
    try {
        const state = thunkAPI.getState();
        const savedToken = state.auth.token;
        console.log(savedToken)
        setAuthToken(savedToken);
        const response = await axios.get("users/current");
        console.log(response)
        return response.data;
    } catch (error) {
        thunkAPI.rejectWithValue(error.message);
    }
    },
    {condition: (_,thunkAPI)=>{
        const state = thunkAPI.getState();
        const savedToken = state.auth.token;

        return savedToken !== null;
    }}
);