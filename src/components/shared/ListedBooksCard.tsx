import { IBook } from "@/app/types/books.types";
import Image from "next/image";

const ListedBooksCard = ({book}: {book: IBook}) => {
  return (
    <div >
      <div key={book.bookId} className="card card-side bg-base-100 shadow-sm">
        <figure>
          <Image src={book.image} alt={book.bookName} width={500} height={400} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{book.bookName}</h2>
          <p>{book.review}</p>
        </div>
      </div>
    </div>
  );
};

export default ListedBooksCard;
