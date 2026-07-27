import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    search: "",
    status: "All",
};

const filterSlice = createSlice({

    name: "filter",

    initialState,

    reducers: {

        setSearch: (state, action) => {
            state.search = action.payload;
        },

        setStatus: (state, action) => {
            state.status = action.payload;
        },

    },

});

export const {
    setSearch,
    setStatus
} = filterSlice.actions;

export default filterSlice.reducer;