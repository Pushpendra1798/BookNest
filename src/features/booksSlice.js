import { createSlice } from "@reduxjs/toolkit";
import books from "../data/Books";

const savedBooks = localStorage.getItem("books");

const initialState = {
    books: savedBooks
        ? JSON.parse(savedBooks)
        : books,
};

const booksSlice = createSlice({
    name: "books",

    initialState,

    reducers: {

    addBook: (state, action) => {
        state.books.push(action.payload);
    },

    toggleFavorite: (state, action) => {

        const book = state.books.find(
        (book) => book.id === action.payload
        );

        if (book) {
        book.favorite = !book.favorite;
        }
    },

    deleteBook: (state, action) => {
        state.books = state.books.filter(
            (book) => book.id !== action.payload
        );
    },

    updateStatus: (state, action) => {
        const { id, status } = action.payload;
        const book = state.books.find(
            (book) => book.id === id
        );
        if (book) {
            book.status = status;
        }
    },

    },
});

export const { addBook, toggleFavorite, deleteBook, updateStatus } = booksSlice.actions;

export default booksSlice.reducer;