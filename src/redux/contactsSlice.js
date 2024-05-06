import { createSlice } from "@reduxjs/toolkit";

const contactsList = [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

const slice = createSlice({
    name: "contacts",
    initialState: {
        contacts: contactsList,
    },
    reducers: {
        addContact: {
            reducer: (state, action) => {
            console.log(state.contacts)
            // console.log(state.contacts)
            // console.log(state.contacts.push(action.payload))
            },
            prepare: (newContact) => {
                return {
                    payload: newContact,
                    id: crypto.randomUUID()
                }
            }
            
        },
        deleteContact:(state, action)=> {
            state.value.filter(contact => contact.id !== id)
        },
    }
    
});

export const { addContact, deleteContact } = slice.actions;

export default slice.reducer;
