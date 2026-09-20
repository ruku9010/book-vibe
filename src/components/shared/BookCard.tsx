import { IBook } from '@/app/types/books.types';
import Image from 'next/image';
import React from 'react';
import { FaStar } from 'react-icons/fa';

interface IBookCardProps {
    book: IBook
}

const BookCard = ({book}: IBookCardProps) => {
    return (
        <div className='flex flex-col gap-3 items-center w-full'>
            <Image src={book.image} alt={book.bookName} width={200} height={160}/>
            <div className='flex gap-5'>
                <span>{book.tags[0]}</span>
            <span>{book.tags[1]}</span>
            </div>
            <h2>{book.bookName}</h2>
            <p>By: {book.author}</p>
            <div className='flex justify-around'>
                <span>{book.category}</span>
                <span className='flex gap-1 items-center'>{book.rating} <FaStar /></span>
            </div>
            <button className='btn btn-active'>View Details</button>
        </div>
    );
};

export default BookCard;