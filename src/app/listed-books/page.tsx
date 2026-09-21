"use client";
import { BooksContext } from "@/context/BooksProvider";
import { useContext } from "react";
import { IBook } from "../types/books.types";
import ListedBooksCard from "@/components/shared/ListedBooksCard";

const ListedBooks = () => {
  const { readBooks, wishlist } = useContext(BooksContext);
  console.log(readBooks, wishlist, "readBooks", "wishlist");

  return (
    <div>
      <h2 className="text-center font-bold text-4xl bg-amber-100 container mx-auto py-5 my-5">
        Listed books
      </h2>

      {/* name of each tab group should be unique */}
      <div className="tabs tabs-box">
        <input
          type="radio"
          name="my_tabs_6"
          className="tab"
          aria-label={`Read Books (${readBooks.length})`}
        />
        <div className="tab-content bg-base-100 border-base-300 p-6">
          {readBooks.length > 0 ? (
            readBooks.map((book: IBook) => { 
              return <ListedBooksCard key={book.bookId} book={book}/>;
            })
          ) : (
            <p className="text-center text-lg font-semibold">
              No read books found
            </p>
          )}
        </div>

        <input
          type="radio"
          name="my_tabs_6"
          className="tab"
          aria-label={`Wishlist Books (${wishlist.length})`}
          defaultChecked
        />
        <div className="tab-content bg-base-100 border-base-300 p-6">
          {wishlist.length > 0 ? (
            wishlist.map((book: IBook) => {
              return <ListedBooksCard key={book.bookId} book={book}/>;
            })
          ) : (
            <p className="text-center text-lg font-semibold">
              No read books found
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ListedBooks;
