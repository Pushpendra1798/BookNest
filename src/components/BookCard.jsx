import { Heart, BookOpen, UserRound, Trash2 } from "lucide-react";
import { useDispatch } from "react-redux";
import { toggleFavorite, deleteBook, updateStatus } from "../features/booksSlice";

const BookCard = ({ book }) => {
    const dispatch = useDispatch();
    return (
        <div className="group relative w-full max-w-sm rounded-2xl border border-gray-800 bg-[#151515] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-500/50 hover:shadow-xl">

            {/* Top Section */}
            <div className="flex items-start justify-between gap-4">

                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400">
                    <BookOpen size={24} />
                </div>

                <button
                onClick={() => dispatch(toggleFavorite(book.id))}
                className={`flex h-10 w-10 items-center justify-center rounded-full transition ${
                    book.favorite
                    ? "bg-red-500/10 text-red-400"
                    : "bg-gray-800 text-gray-400 hover:text-red-400"
                }`}
                >
                <Heart
                    size={19}
                    fill={book.favorite ? "currentColor" : "none"}
                />
                </button>

            </div>

            {/* Book Information */}
            <div className="mt-5">

                <h2 className="text-xl font-semibold text-white">
                    {book.title}
                </h2>

                <div className="mt-2 flex items-center gap-2 text-sm text-gray-400">
                    <UserRound size={15} />
                    <span>{book.author}</span>
                </div>

            </div>

            {/* Category */}
            <div className="mt-5">
                <span className="rounded-full bg-gray-800 px-3 py-1.5 text-xs font-medium text-gray-300">
                    {book.category}
                </span>
            </div>

            {/* Divider */}
            <div className="my-5 border-t border-gray-800" />

            {/* Bottom Section */}
            <div>

                {/* Reading Status */}
                <div className="flex items-center justify-between">

                    <span className="text-xs text-gray-500">
                        Reading Status
                    </span>

                    <div className="relative">

                        <select
                            value={book.status}
                            onChange={(e) =>
                                dispatch(
                                    updateStatus({
                                        id: book.id,
                                        status: e.target.value,
                                    })
                                )
                            }
                            className={`cursor-pointer appearance-none rounded-full border-0 py-1.5 pl-3 pr-8 text-xs font-medium outline-none transition-all duration-200 ${
                                book.status === "Completed"
                                    ? "bg-emerald-500/10 text-emerald-400"
                                    : book.status === "Reading"
                                    ? "bg-blue-500/10 text-blue-400"
                                    : "bg-yellow-500/10 text-yellow-400"
                            }`}
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

                        {/* Custom Arrow */}
                        <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[10px]">
                            ▼
                        </span>

                    </div>

                </div>

                {/* Delete */}
                <button
                    onClick={() => dispatch(deleteBook(book.id))}
                    className="mt-5 flex w-full items-center justify-center gap-2 rounded-lg bg-red-500/10 px-3 py-2 text-sm text-red-400 transition hover:bg-red-500/20"
                >
                    <Trash2 size={16} />
                    Delete Book
                </button>

            </div>

        </div>
    );
};

export default BookCard;