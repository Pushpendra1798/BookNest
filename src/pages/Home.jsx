import { useSelector } from "react-redux";
import BookCard from "../components/BookCard";

const Home = () => {

    const books = useSelector((state) => state.books.books);

    return (
        <main className="min-h-screen bg-[#0d0d0d] px-6 py-10">

            <div className="mx-auto max-w-7xl">

                <h1 className="text-3xl font-bold text-white">
                    My Library
                </h1>

                <p className="mt-2 text-gray-400">
                    Manage and track your books.
                </p>

                <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

                    {books.map((book) => (
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