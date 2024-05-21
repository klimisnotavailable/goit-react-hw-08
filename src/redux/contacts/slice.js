import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts, addContact, deleteContact} from "./operations";
import {logout} from '../auth/operations';

const slice = createSlice({
    name: "contacts",
    initialState: {
        contacts: {
            items: [],
            loading: false,
            error:null,
        }
    },
    extraReducers: (builder) =>
    builder.addCase(fetchContacts.pending, (state) => {
        state.contacts.error = false;
        state.contacts.loading = true
    })
    .addCase(fetchContacts.fulfilled, (state, action) => {
        state.contacts.items = action.payload;
        state.contacts.loading = false;
    })
    .addCase(fetchContacts.rejected, (state) => {
        state.contacts.error = true;
        state.contacts.loading = false;
    })
    .addCase(addContact.pending, (state) => {
        state.contacts.error = false;
        state.contacts.loading = true
    })
    .addCase(addContact.fulfilled, (state, action) => {
        state.contacts.items.push(action.payload);
        state.contacts.loading = false;
    })
    .addCase(addContact.rejected, (state) => {
        state.contacts.error = true;
        state.contacts.loading = false;
    }).addCase(deleteContact.fulfilled, (state,action) => {
     state.contacts.items = state.contacts.items.filter((contact => contact.id !== action.payload.id))
    }).addCase(logout.fulfilled,(state)=>{
        state.contacts.items = []
    })
});

export default slice.reducer;

