import { useSelector, useDispatch } from "react-redux";
import { Search, SlidersHorizontal } from "lucide-react";
import BookCard from "../components/BookCard";
import { setSearch, setStatus } from "../features/filterSlice";

const Home = () => {
    const dispatch = useDispatch();

    const books = useSelector((state) => state.books.books);

    const { search, status } = useSelector(
        (state) => state.filter
    );

    const filteredBooks = books.filter((book) => {

        const matchesSearch =
            book.title
                .toLowerCase()
                .includes(search.toLowerCase()) ||
            book.author
                .toLowerCase()
                .includes(search.toLowerCase());

        const matchesStatus =
            status === "All" ||
            book.status === status;

        return matchesSearch && matchesStatus;
    });

    return (
        <main className="min-h-screen bg-[#0d0d0d] px-6 py-10">

            <div className="mx-auto max-w-7xl">

                <h1 className="text-3xl font-bold text-white">
                    My Library
                </h1>

                <p className="mt-2 text-gray-400">
                    Manage and track your books.
                </p>

                <div className="mt-8 flex flex-col gap-4 sm:flex-row">

                    {/* Search */}
                    <div className="relative flex-1">

                        <Search
                            size={18}
                            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
                        />

                        <input
                            type="text"
                            value={search}
                            onChange={(e) =>
                                dispatch(setSearch(e.target.value))
                            }
                            placeholder="Search by title or author..."
                            className="w-full rounded-xl border border-gray-800 bg-[#151515] py-3 pl-11 pr-4 text-sm text-white outline-none transition placeholder:text-gray-600 focus:border-emerald-500"
                        />

                    </div>


                    {/* Status Filter */}
                    <div className="relative">

                        <SlidersHorizontal
                            size={17}
                            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
                        />

                        <select
                            value={status}
                            onChange={(e) =>
                                dispatch(setStatus(e.target.value))
                            }
                            className="cursor-pointer rounded-xl border border-gray-800 bg-[#151515] py-3 pl-11 pr-10 text-sm text-gray-300 outline-none focus:border-emerald-500"
                        >
                            <option value="All">
                                All Status
                            </option>

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

                <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

                    {filteredBooks.map((book) => (
                        <BookCard
                            key={book.id}
                            book={book}
                        />
                    ))}

                </div>

            </div>

        </main>
    );
};

export default Home;