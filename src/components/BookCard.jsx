import { Heart, UserRound, Trash2 } from "lucide-react";
import defaultBook from "../assets/default-book.jpg";
import { useDispatch } from "react-redux";
import {
    toggleFavorite,
    deleteBook,
    updateStatus,
} from "../features/booksSlice";

const BookCard = ({ book }) => {

    const dispatch = useDispatch();

    return (
        <div className="group relative flex h-full min-h-[480px] w-full flex-col overflow-hidden rounded-2xl border border-gray-800 bg-[#151515] transition-all duration-300 hover:-translate-y-1 hover:border-emerald-500/50">

            {/* ================= IMAGE SECTION ================= */}
            <div className="relative flex h-64 w-full items-center justify-center overflow-hidden bg-[#101010] p-4">

                <img
                    src={book.image || defaultBook}
                    alt={book.title}
                    className="h-full max-w-full rounded-md object-contain"
                />

                <button
                    onClick={() => dispatch(toggleFavorite(book.id))}
                    className={`absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full backdrop-blur-md transition ${
                        book.favorite
                            ? "bg-red-500 text-white"
                            : "bg-black/60 text-gray-300 hover:text-red-400"
                    }`}
                >
                    <Heart
                        size={19}
                        fill={book.favorite ? "currentColor" : "none"}
                    />
                </button>

            </div>


            {/* ================= CONTENT ================= */}
            <div className="flex flex-1 flex-col p-5">

                {/* Book Information */}
                <div>

                    <h2 className="line-clamp-2 text-xl font-semibold text-white">
                        {book.title}
                    </h2>

                    <div className="mt-2 flex items-center gap-2 text-sm text-gray-400">
                        <UserRound size={15} />

                        <span>
                            {book.author}
                        </span>
                    </div>

                </div>


                {/* ================= BOTTOM ================= */}
                <div className="mt-auto">

                    {/* Divider */}
                    <div className="mb-5 mt-5 border-t border-gray-800" />


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
                                className={`cursor-pointer appearance-none rounded-full py-1.5 pl-4 pr-8 text-xs font-semibold outline-none ${
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

                            <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[9px]">
                                ▼
                            </span>

                        </div>

                    </div>


                    {/* Delete Button */}
                    <button
                        onClick={() =>
                            dispatch(deleteBook(book.id))
                        }
                        className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl border border-red-500/10 bg-red-500/10 py-2.5 text-sm font-medium text-red-400 transition hover:border-red-500/20 hover:bg-red-500/15"
                    >
                        <Trash2 size={16} />

                        Delete Book
                    </button>

                </div>

            </div>

        </div>
    );
};

export default BookCard;