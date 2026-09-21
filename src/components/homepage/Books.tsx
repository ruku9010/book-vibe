import { IBook } from "@/app/types/books.types";
import BookCard from "../shared/BookCard";


const getBooks = async()=>{
    try{
        const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/booksData.json`);
        const data = await response.json();
        return data;
    
    }catch(error){
        console.error("Error fetching books data:", error)
        return [];
    }
}

const Books = async() => {
    const booksData = await getBooks();
    
    return (
        <div className='container mx-auto'>
            <h2 className="text-center font-bold text-4xl my-10">Explore Favorite Books</h2>
            <div className="grid grid-cols-4 gap-3">
                {
                    booksData.slice(0,8).map((book: IBook)=> {
                        return <BookCard key={book.bookId} book={book}/>
                    })
                }
            </div>
        </div>
    );
};

export default Books;