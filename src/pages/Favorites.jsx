import { useSelector } from "react-redux";
import { Heart, BookHeart } from "lucide-react";
import BookCard from "../components/BookCard";

const Favorites = () => {

    // Redux Store se books
    const books = useSelector((state) => state.books.books);

    // Favorite books filter
    const favoriteBooks = books.filter(
        (book) => book.favorite
    );

    return (
        <main className="min-h-screen bg-[#0d0d0d] px-6 py-10">

            <div className="mx-auto max-w-7xl">

                {/* Heading */}
                <div className="flex items-center gap-4">

                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-500/10 text-red-400">
                        <Heart size={24} fill="currentColor" />
                    </div>

                    <div>
                        <h1 className="text-3xl font-bold text-white">
                            Favorite Books
                        </h1>

                        <p className="mt-1 text-gray-400">
                            All the books you've saved as your favorites.
                        </p>
                    </div>

                </div>


                {/* Favorite Count */}
                <div className="mt-8 flex items-center gap-2 text-sm text-gray-400">

                    <BookHeart
                        size={18}
                        className="text-emerald-400"
                    />

                    <span>
                        {favoriteBooks.length} favorite books
                    </span>

                </div>


                {/* Favorite Books */}
                {favoriteBooks.length > 0 ? (

                    <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

                        {favoriteBooks.map((book) => (
                            <BookCard
                                key={book.id}
                                book={book}
                            />
                        ))}

                    </div>

                ) : (

                    <div className="mt-16 flex flex-col items-center justify-center text-center">

                        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gray-800">
                            <Heart
                                size={32}
                                className="text-gray-500"
                            />
                        </div>

                        <h2 className="mt-5 text-xl font-semibold text-white">
                            No favorite books yet
                        </h2>

                        <p className="mt-2 text-sm text-gray-500">
                            Books you mark as favorite will appear here.
                        </p>

                    </div>

                )}

            </div>

        </main>
    );
};

export default Favorites;