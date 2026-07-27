import { configureStore } from "@reduxjs/toolkit";

import booksReducer from "../features/booksSlice";
import filterReducer from "../features/filterSlice";

export const store = configureStore({

    reducer: {

        books: booksReducer,

        filter: filterReducer,

    },

});

store.subscribe(() => {

    const state = store.getState();

    localStorage.setItem(
        "books",
        JSON.stringify(state.books.books)
    );

});