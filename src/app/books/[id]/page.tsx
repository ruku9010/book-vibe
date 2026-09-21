import { IBook } from "@/app/types/books.types";
import ReadButton from "@/components/bookDetails/ReadButton";
import WishlistButton from "@/components/bookDetails/WishlistButton";
import Image from "next/image";

interface IBookDetailsProps {
  params: Promise<{
    id: string;
  }>;
}

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

const BookDetailsPage = async ({ params }: IBookDetailsProps) => {
  const { id } = await params;

  const booksData = await getBooks();

  const book = booksData.find(
    (bookData: IBook) => String(bookData.bookId) === String(id),
  ) as IBook;

  //   console.log(book);

  return (
    <div className="card lg:card-side bg-base-100 shadow-sm">
      <figure>
        <Image src={book.image} alt={book.bookName} width={400} height={450} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{book.bookName}</h2>
        <p>{book.review}</p>
        <div className="card-actions justify-end">
          
            <ReadButton book={book} />
          
          
            <WishlistButton book={book} />
          
        </div>
      </div>
    </div>
  );
};

export default BookDetailsPage;
