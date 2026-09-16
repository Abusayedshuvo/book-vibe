import Book from "../Book/Book";

const Books = ({ data }) => {
  return (
    <div>
      <p className="text-center text-3xl font-bold mb-10">Books</p>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 container mx-auto mb-20">
        {data.map((book) => (
          <Book key={book.bookId} book={book}></Book>
        ))}
      </div>
    </div>
  );
};

export default Books;
