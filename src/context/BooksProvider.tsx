"use client"

import { IBook } from "@/app/types/books.types";
import { createContext, Dispatch, ReactNode, SetStateAction, useState } from "react";

interface IBooksContext {
    readBooks: IBook[];
    setReadBooks: Dispatch<SetStateAction<IBook[]>>;
    wishlist: IBook[];
    setWishlist: Dispatch<SetStateAction<IBook[]>>;
}

export const BooksContext = createContext<IBooksContext>({
    readBooks: [],
    setReadBooks: () => {},
    wishlist: [],
    setWishlist: () => {},
})


const BooksProvider = ({children}: {children: ReactNode}) => {

    const [readBooks, setReadBooks] = useState<IBook[]>([])
    const [wishlist, setWishlist] = useState<IBook[]>([])

    const sharedData = {
        readBooks,
        setReadBooks,
        wishlist,
        setWishlist
    }

    return <BooksContext.Provider value={sharedData}>{children}</BooksContext.Provider>
};

export default BooksProvider;