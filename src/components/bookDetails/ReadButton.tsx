"use client";

import { IBook } from "@/app/types/books.types";
import { BooksContext } from "@/context/BooksProvider";
import { useContext } from "react";
import { toast } from "react-toastify";

// interface ReadButtonProps {

// }

const ReadButton = ({ book }: { book: IBook }) => {
  const { readBooks, setReadBooks } = useContext(BooksContext);

  // console.log(BooksContext);

  const handleReadBook = () => {
  const alreadyRead = readBooks.some(
    (item: IBook) => item.bookId === book.bookId
  );

  if (alreadyRead) {
    toast.error(`You already added this book`);
    return;
  }

  setReadBooks([...readBooks, book]);
  toast.success(`You have added ${book.bookName} to Read list`);
};

  return (
    <div>
      <button onClick={() => handleReadBook()} className="btn btn-primary">
        Add to Read
      </button>
    </div>
  );
};

export default ReadButton;
