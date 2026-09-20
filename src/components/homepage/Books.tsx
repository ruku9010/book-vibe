

const getBooks = async()=>{
    const response = await fetch('/public/booksData.json');
    const data = await response.json();
    return data
}

const Books = async() => {
    const booksData = await getBooks();
    console.log(booksData)
    
    return (
        <div className='container mx-auto'>
            Books
        </div>
    );
};

export default Books;