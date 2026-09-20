"use client"

import { IBook } from '@/app/types/books.types';
import { BooksContext } from '@/context/BooksProvider';
import { useContext } from 'react';

// interface ReadButtonProps {

// }

const ReadButton = ({book}: {book: IBook}) => {

    const {readBooks, setReadBooks} = useContext(BooksContext)

    // console.log(BooksContext);

    const handleReadBook = () => {
        console.log("Read button triggared", book);
        setReadBooks([...readBooks, book]);
        alert(`You have add ${book.bookName} to Read list` )
    };
    

    return (
        <div>
            <button onClick={() => handleReadBook()} className="btn btn-primary">Read</button>
        </div>
    );
};

export default ReadButton;