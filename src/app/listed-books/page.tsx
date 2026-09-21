"use client";
import { BooksContext } from "@/context/BooksProvider";
import { useContext, useState } from "react";
import { IBook } from "../types/books.types";
import ListedBooksCard from "@/components/shared/ListedBooksCard";

const ListedBooks = () => {
  const { readBooks, wishlist } = useContext(BooksContext);
  const [sortBy, setSortBy] = useState<"rating" | "pages" | "year">("rating");

  console.log(readBooks, wishlist, "readBooks", "wishlist");
  console.log(sortBy, "sortBy");


  const sortBooks = (books: IBook[]) => {
    const sortedBooks = [...books];

    if (sortBy === "rating"){
      sortedBooks.sort((a, b)=> b.rating - a.rating);
    } else if (sortBy === "pages"){
      sortedBooks.sort((a, b)=> b.totalPages - a.totalPages);
    } else if (sortBy === "year"){
      sortedBooks.sort((a, b)=> b.yearOfPublishing - a.yearOfPublishing);
    }
    return sortedBooks;
  }

  const sortedReadBooks = sortBooks(readBooks)
  const sortedWishlist = sortBooks(wishlist)
  
  console.log(sortedReadBooks, sortedWishlist);
  

  return (
    <div>
      <h2 className="text-center font-bold text-4xl bg-amber-100 container mx-auto py-5 my-5">
        Listed books
      </h2>
<div className="text-center my-5">

<select value={sortBy} onChange={(e)=> setSortBy(e.target.value as "rating" | "pages" | "year")}  className="select select-success">
  <option disabled={true}>Sort By</option>
  <option value={"rating"}>Rating</option>
  <option value={"pages"}>Number of Pages</option>
  <option value={"year"}>Published Year</option>
</select>

</div>
      {/* name of each tab group should be unique */}
      <div className="tabs tabs-box">
        <input
          type="radio"
          name="my_tabs_6"
          className="tab"
          aria-label={`Read Books (${readBooks.length})`}
        />
        <div className="tab-content bg-base-100 border-base-300 p-6">
          {sortedReadBooks.length > 0 ? (
            sortedReadBooks.map((book: IBook) => { 
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
          {sortedWishlist.length > 0 ? (
            sortedWishlist.map((book: IBook) => {
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
