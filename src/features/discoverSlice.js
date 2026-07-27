import {
    createSlice,
    createAsyncThunk
} from "@reduxjs/toolkit";

const API_KEY = import.meta.env.VITE_GOOGLE_BOOKS_API_KEY;


export const fetchBooks = createAsyncThunk(
    "discover/fetchBooks",

    async (searchTerm, { rejectWithValue }) => {
        try {
            console.log("API KEY:", API_KEY);
            console.log("Searching:", searchTerm);

            const response = await fetch(
                `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(searchTerm)}&maxResults=12&key=${API_KEY}`
            );

            const data = await response.json();

            console.log("Status:", response.status);
            console.log("Google Response:", data);

            if (!response.ok) {
                return rejectWithValue(
                    data?.error?.message || "Failed to fetch books"
                );
            }

            return data.items || [];

        } catch (error) {
            console.log("Fetch Error:", error);

            return rejectWithValue(
                "Network error. Please try again."
            );
        }
    }
);


const initialState = {
    books: [],
    loading: false,
    error: null,
};


const discoverSlice = createSlice({

    name: "discover",

    initialState,

    reducers: {},

    extraReducers: (builder) => {

        builder

            .addCase(fetchBooks.pending, (state) => {
                state.loading = true;
                state.error = null;
            })

            .addCase(fetchBooks.fulfilled, (state, action) => {
                state.loading = false;
                state.books = action.payload;
            })

            .addCase(fetchBooks.rejected, (state, action) => {
                state.loading = false;

                state.error =
                    action.payload ||
                    "Something went wrong";
            });
    },

});


export default discoverSlice.reducer;