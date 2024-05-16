import axios from 'axios';
import { createAsyncThunk } from "@reduxjs/toolkit";

console.log(axios.defaults.baseURL)
export const register = createAsyncThunk("auth/register", async (newContact, thunkAPI) => {
    try {
        const response = await axios.post("users/signup", newContact);
        return response
    } catch (error) {
        thunkAPI.rejectWithValue(error.message)
    }
});

