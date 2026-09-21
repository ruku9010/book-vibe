"use client"

import { IBook } from '@/app/types/books.types';
import { BooksContext } from '@/context/BooksProvider';
import { useContext } from 'react';
import { toast } from 'react-toastify';

// interface ReadButtonProps {

// }

const WishlistButton = ({book}: {book: IBook}) => {

    const {wishlist, setWishlist} = useContext(BooksContext)

    // console.log(BooksContext);

    const handleReadBook = () => {
        const alreadyRead = wishlist.some(
    (item: IBook) => item.bookId === book.bookId
  );

  if (alreadyRead) {
    toast.error(`You already added this book`);
    return;
  }

  setWishlist([...wishlist, book]);
  toast.success(`You have added ${book.bookName} to Wishlist`);
    };
    

    return (
        <div>
            <button onClick={() => handleReadBook()} className="btn btn-primary">Add to Wishlist</button>
        </div>
    );
};

export default WishlistButton;