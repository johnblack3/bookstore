/* eslint-disable react/prop-types */
import BookSingleCard from "./BookSingleCard";

const BooksCard = ({ books }) => {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 x1:grid-cols-4">
      {books.map((item) => (
        <BookSingleCard key={item._id} book={item} />
      ))}
    </div>
  );
};

export default BooksCard;

// import { Link } from "react-router-dom";
// import { PiBookOpenTextLight } from "react-icons/pi";
// import { BiUserCircle } from "react-icons/bi";
// import { AiOutlineEdit } from "react-icons/ai";
// import { BsInfoCircle } from "react-icons/bs";
// import { MdOutlineDelete } from "react-icons/md";

// const BooksCard = ({ books }) => {
//     return (
//       <div>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//               {books.map((book) => (
//               <div key={book._id} className="border border-gray-200 rounded-lg p-4">
//                   <div className="flex justify-center">
//                   <PiBookOpenTextLight className="text-6xl text-blue-800" />
//                   </div>
//                   <h2 className="text-2xl font-semibold text-center my-4">{book.title}</h2>
//                   <div className="flex justify-center items-center gap-x-4">
//                   <BiUserCircle className="text-2xl text-blue-800" />
//                   <p className="text-lg text-gray-800">{book.author}</p>
//                   </div>
//                   <div className="flex justify-center items-center gap-x-4">
//                   <BsInfoCircle className="text-2xl text-green-800" />
//                   <Link to={`/books/details/${book._id}`}>
//                       <BsInfoCircle className="text-2xl text-green-800" />
//                   </Link>
//                   <Link to={`/books/edit/${book._id}`}>
//                       <AiOutlineEdit className="text-2xl text-yellow-600" />
//                   </Link>
//                   <Link to={`/books/delete/${book._id}`}>
//                       <MdOutlineDelete className="text-2xl text-red-600" />
//                   </Link>
//                   </div>
//               </div>
//               ))}
//           </div>
//       </div>
//     )
//   }


