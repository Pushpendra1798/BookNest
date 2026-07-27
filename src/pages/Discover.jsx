import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Search, LoaderCircle, Plus, Check } from "lucide-react";


import { fetchBooks } from "../features/discoverSlice";
import { addBook } from "../features/booksSlice";


const Discover = () => {

    const dispatch = useDispatch();

    // Search Input State
    const [searchTerm, setSearchTerm] = useState("");


    // Discover Slice
    const { books, loading, error } = useSelector(
        (state) => state.discover
    );


    // Personal Library
    const myBooks = useSelector(
        (state) => state.books.books
    );


    // Search Books
    const handleSearch = (e) => {

        e.preventDefault();

        if (!searchTerm.trim()) return;

        dispatch(fetchBooks(searchTerm));
    };


    // Add API Book To Personal Library
    const handleAddToLibrary = (book) => {

        const info = book.volumeInfo;

        const newBook = {
            id: book.id,
            title: info.title,
            author: info.authors?.[0] || "Unknown Author",
            category: info.categories?.[0] || "Other",
            status: "Want to Read",
            favorite: false,
            image: info.imageLinks?.thumbnail || "",
        };

        dispatch(addBook(newBook));
    };


    return (
        <main className="min-h-screen bg-[#0d0d0d] px-6 py-10">

            <div className="mx-auto max-w-7xl">

                {/* Heading */}
                <div>
                    <h1 className="text-3xl font-bold text-white">
                        Discover Books
                    </h1>

                    <p className="mt-2 text-gray-400">
                        Explore books and discover something new.
                    </p>
                </div>


                {/* Search */}
                <form
                    onSubmit={handleSearch}
                    className="mt-8 flex gap-3"
                >

                    <div className="relative flex-1">

                        <Search
                            size={18}
                            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
                        />

                        <input
                            type="text"
                            value={searchTerm}
                            onChange={(e) =>
                                setSearchTerm(e.target.value)
                            }
                            placeholder="Search books..."
                            className="w-full rounded-xl border border-gray-800 bg-[#151515] py-3 pl-11 pr-4 text-white outline-none placeholder:text-gray-600 focus:border-emerald-500"
                        />

                    </div>


                    <button
                        type="submit"
                        className="rounded-xl bg-emerald-500 px-6 font-semibold text-black transition hover:bg-emerald-400"
                    >
                        Search
                    </button>

                </form>


                {/* Loading */}
                {loading && (

                    <div className="mt-16 flex items-center justify-center gap-3 text-gray-400">

                        <LoaderCircle
                            className="animate-spin text-emerald-400"
                            size={24}
                        />

                        Loading books...

                    </div>

                )}


                {/* Error */}
                {error && (

                    <div className="mt-10 rounded-xl border border-red-500/20 bg-red-500/10 p-4 text-red-400">
                        {error}
                    </div>

                )}


                {/* Books */}
                {!loading && !error && (

                    <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

                        {books.map((book) => {

                            const info = book.volumeInfo;

                            const alreadyAdded = myBooks.some(
                                (myBook) => myBook.id === book.id
                            );

                            return (
                                <div
                                    key={book.id}
                                    className="flex h-full flex-col overflow-hidden rounded-2xl border border-gray-800 bg-[#151515] transition hover:border-emerald-500/40"
                                >

                                    {/* Book Cover */}
                                    <div className="flex h-54 items-center justify-center bg-[#101010] p-5">

                                        {info.imageLinks?.thumbnail ? (

                                            <img
                                                src={info.imageLinks.thumbnail}
                                                alt={info.title}
                                                className="h-full max-w-full rounded-lg object-contain"
                                            />

                                        ) : (

                                            <div className="flex h-full w-full items-center justify-center text-sm text-gray-600">
                                                No Cover Available
                                            </div>

                                        )}

                                    </div>


                                    {/* Book Details */}
                                    <div className="flex flex-1 flex-col p-5">

                                        <h2 className="line-clamp-2 text-lg font-semibold text-white">
                                            {info.title}
                                        </h2>

                                        <p className="mt-2 text-sm text-gray-400">
                                            {info.authors?.[0] || "Unknown Author"}
                                        </p>

                                        <div className="mt-4">

                                            <span className="rounded-full bg-gray-800 px-3 py-1 text-xs text-gray-300">
                                                {info.categories?.[0] || "Other"}
                                            </span>

                                        </div>

                                        <p className="my-3 text-xs text-gray-500">
                                            Published: {info.publishedDate || "Unknown"}
                                        </p>


                                        {/* Add Button */}
                                        <button
                                            disabled={alreadyAdded}
                                            onClick={() => handleAddToLibrary(book)}
                                            className={`mt-auto flex w-full items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold transition ${alreadyAdded
                                                ? "cursor-not-allowed bg-gray-800 text-gray-500"
                                                : "bg-emerald-500 text-black hover:bg-emerald-400"
                                                }`}
                                        >

                                            {alreadyAdded ? (
                                                <>
                                                    <Check size={17} />
                                                    Added
                                                </>
                                            ) : (
                                                <>
                                                    <Plus size={17} />
                                                    Add to Library
                                                </>
                                            )}

                                        </button>

                                    </div>

                                </div>
                            );
                        })}

                    </div>

                )}

            </div>

        </main>
    );
};

export default Discover;