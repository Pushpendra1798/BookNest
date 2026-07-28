import { configureStore } from "@reduxjs/toolkit";
import booksReducer from "../features/booksSlice";
import filterReducer from "../features/filterSlice";
import discoverReducer from "../features/discoverSlice";

export const store = configureStore({
    reducer: {
        books: booksReducer,
        filter: filterReducer,
        discover: discoverReducer,
    },
});

store.subscribe(() => {
    const state = store.getState();
    localStorage.setItem(
        "books",
        JSON.stringify(state.books.books)
    );
});