import { IBook } from "@/app/types/books.types";
import Image from "next/image";
import Link from "next/link";

interface IBookDetailsProps {
  params: Promise<{
    id: string;
  }>;
}

const getBooks = async () => {
  const response = await fetch("http://localhost:3000/booksData.json");
  const data = await response.json();
  return data;
};

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
          <Link href={"/src/app/listed-books/page.tsx"}>
            <button className="btn btn-primary">Read</button>{" "}
          </Link>
          <Link href={"/src/app/listed-books/page.tsx"}>
            <button className="btn btn-primary">Wishlist</button>{" "}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BookDetailsPage;
