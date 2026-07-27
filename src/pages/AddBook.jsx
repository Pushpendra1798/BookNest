import { useState } from "react";
import { useDispatch } from "react-redux";
import { addBook } from "../features/booksSlice";

import {
    BookOpen,
    UserRound,
    Tags,
    Library,
    Plus,
} from "lucide-react";

const AddBook = () => {

    const dispatch = useDispatch();

    const [formData, setFormData] = useState({
        title: "",
        author: "",
        category: "",
        status: "Want to Read",
        favorite: false,
    });


    // Handle Input Changes
    const handleChange = (e) => {

        const { name, value, type, checked } = e.target;

        setFormData({
            ...formData,
            [name]: type === "checkbox" ? checked : value,
        });
    };


    // Handle Submit
    const handleSubmit = (e) => {

        e.preventDefault();

        const newBook = {
            id: Date.now(),
            ...formData,
        };

        console.log("Dispatching:", newBook);

        // Redux Action Dispatch
        dispatch(addBook(newBook));

        // Reset Form
        setFormData({
            title: "",
            author: "",
            category: "",
            status: "Want to Read",
            favorite: false,
        });
    };


    return (
        <main className="min-h-screen bg-[#0d0d0d] px-6 py-10">

            <div className="mx-auto max-w-3xl">

                {/* Heading */}
                <div className="flex items-center gap-4">

                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400">
                        <Plus size={25} />
                    </div>

                    <div>
                        <h1 className="text-3xl font-bold text-white">
                            Add New Book
                        </h1>

                        <p className="mt-1 text-gray-400">
                            Add a new book to your personal library.
                        </p>
                    </div>

                </div>


                {/* Form */}
                <form
                    onSubmit={handleSubmit}
                    className="mt-10 rounded-2xl border border-gray-800 bg-[#151515] p-7"
                >

                    {/* Book Title */}
                    <div>

                        <label className="mb-2 flex items-center gap-2 text-sm font-medium text-gray-300">
                            <BookOpen
                                size={17}
                                className="text-emerald-400"
                            />
                            Book Title
                        </label>

                        <input
                            type="text"
                            name="title"
                            value={formData.title}
                            onChange={handleChange}
                            placeholder="e.g. Atomic Habits"
                            required
                            className="w-full rounded-xl border border-gray-800 bg-[#0d0d0d] px-4 py-3 text-white outline-none transition placeholder:text-gray-600 focus:border-emerald-500"
                        />

                    </div>


                    {/* Author */}
                    <div className="mt-6">

                        <label className="mb-2 flex items-center gap-2 text-sm font-medium text-gray-300">
                            <UserRound
                                size={17}
                                className="text-emerald-400"
                            />
                            Author
                        </label>

                        <input
                            type="text"
                            name="author"
                            value={formData.author}
                            onChange={handleChange}
                            placeholder="e.g. James Clear"
                            required
                            className="w-full rounded-xl border border-gray-800 bg-[#0d0d0d] px-4 py-3 text-white outline-none transition placeholder:text-gray-600 focus:border-emerald-500"
                        />

                    </div>


                    {/* Category + Status */}
                    <div className="mt-6 grid gap-6 sm:grid-cols-2">

                        {/* Category */}
                        <div>

                            <label className="mb-2 flex items-center gap-2 text-sm font-medium text-gray-300">
                                <Tags
                                    size={17}
                                    className="text-emerald-400"
                                />
                                Category
                            </label>

                            <select
                                name="category"
                                value={formData.category}
                                onChange={handleChange}
                                required
                                className="w-full rounded-xl border border-gray-800 bg-[#0d0d0d] px-4 py-3 text-gray-300 outline-none transition focus:border-emerald-500"
                            >

                                <option value="" disabled>
                                    Select category
                                </option>

                                <option value="Self Help">
                                    Self Help
                                </option>

                                <option value="Finance">
                                    Finance
                                </option>

                                <option value="Programming">
                                    Programming
                                </option>

                                <option value="Productivity">
                                    Productivity
                                </option>

                                <option value="Fiction">
                                    Fiction
                                </option>

                                <option value="Other">
                                    Other
                                </option>

                            </select>

                        </div>


                        {/* Reading Status */}
                        <div>

                            <label className="mb-2 flex items-center gap-2 text-sm font-medium text-gray-300">
                                <Library
                                    size={17}
                                    className="text-emerald-400"
                                />
                                Reading Status
                            </label>

                            <select
                                name="status"
                                value={formData.status}
                                onChange={handleChange}
                                className="w-full rounded-xl border border-gray-800 bg-[#0d0d0d] px-4 py-3 text-gray-300 outline-none transition focus:border-emerald-500"
                            >

                                <option value="Want to Read">
                                    Want to Read
                                </option>

                                <option value="Reading">
                                    Reading
                                </option>

                                <option value="Completed">
                                    Completed
                                </option>

                            </select>

                        </div>

                    </div>


                    {/* Favorite */}
                    <div className="mt-6 flex items-center gap-3">

                        <input
                            id="favorite"
                            type="checkbox"
                            name="favorite"
                            checked={formData.favorite}
                            onChange={handleChange}
                            className="h-4 w-4 accent-emerald-500"
                        />

                        <label
                            htmlFor="favorite"
                            className="cursor-pointer text-sm text-gray-400"
                        >
                            Add this book to favorites
                        </label>

                    </div>


                    <div className="my-7 border-t border-gray-800" />


                    {/* Submit */}
                    <div className="flex justify-end">

                        <button
                            type="submit"
                            className="flex items-center gap-2 rounded-xl bg-emerald-500 px-6 py-3 font-semibold text-black transition duration-300 hover:bg-emerald-400"
                        >
                            <Plus size={19} />

                            Add Book
                        </button>

                    </div>

                </form>

            </div>

        </main>
    );
};

export default AddBook;