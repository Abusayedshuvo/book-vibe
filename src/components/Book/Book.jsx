import { FaRegStar } from "react-icons/fa";

const Book = ({ book }) => {
  const { image, bookName, rating, author, tags, category } = book;
  return (
    <div className="border border-[#131313]/15 p-6 rounded-2xl ">
      <div className="bg-[#F3F3F3] rounded-2xl p-8 mb-6">
        <img className="h-40 mx-auto" src={image} alt="" />
      </div>
      {tags.map((tag, index) => (
        <span
          key={index}
          className="bg-[#23BE0A]/5 py-2 px-4 rounded-3xl text-[#23BE0A] font-medium inline-block h-8 leading-4 me-3"
        >
          {tag}
        </span>
      ))}
      <p className="text-2xl font-bold my-4"> {bookName} </p>
      <p className="text-[#131313]/80 font-medium">By: {author} </p>
      <div className="border border-dashed border-[#131313]/15 my-5"></div>
      <div className="flex justify-between font-medium text-[#131313]/80">
        <span>{category}</span>
        <span className="flex gap-2 items-center">
          {rating} <FaRegStar />
        </span>
      </div>
    </div>
  );
};

export default Book;
