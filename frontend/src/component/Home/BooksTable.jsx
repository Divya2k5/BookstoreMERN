import { Link } from 'react-router-dom';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineDelete } from 'react-icons/md';

const BooksTable = ({ books }) => {
  return (
    <table className='w-full border-collapse'>
      <thead>
        {/* Styled Header Row */}
        <tr className='bg-slate-100 border-b-2 border-slate-300'>
          <th className='px-4 py-3 text-center font-semibold text-slate-600 uppercase text-sm tracking-wider'>No</th>
          <th className='px-4 py-3 text-left font-semibold text-slate-600 uppercase text-sm tracking-wider'>Title</th>
          <th className='px-4 py-3 text-left font-semibold text-slate-600 uppercase text-sm tracking-wider max-md:hidden'>
            Author
          </th>
          <th className='px-4 py-3 text-center font-semibold text-slate-600 uppercase text-sm tracking-wider max-md:hidden'>
            Publish Year
          </th>
          <th className='px-4 py-3 text-center font-semibold text-slate-600 uppercase text-sm tracking-wider'>Operations</th>
        </tr>
      </thead>
      <tbody>
        {books.map((book, index) => (
          // Added zebra striping (even rows have a light background)
          <tr 
            key={book._id} 
            className='h-12 border-b border-slate-200 even:bg-slate-50 hover:bg-sky-50 transition-colors duration-150'
          >
            <td className='px-4 py-2 text-center text-slate-700'>
              {index + 1}
            </td>
            <td className='px-4 py-2 text-left text-slate-700'>
              {book.title}
            </td>
            <td className='px-4 py-2 text-left text-slate-700 max-md:hidden'>
              {book.author}
            </td>
            <td className='px-4 py-2 text-center text-slate-700 max-md:hidden'>
              {book.publishYear}
            </td>
            <td className='px-4 py-2 text-center'>
              <div className='flex justify-center items-center gap-x-4'>
                {/* Added 'title' for tooltip */}
                <Link to={`/sample/show/${book._id}`} title='View Details'>
                  <BsInfoCircle className='text-2xl text-green-700 hover:text-green-500 transition-colors duration-150' />
                  {/* Alternative color: text-sky-600 hover:text-sky-800 */}
                </Link>
                {/* Added 'title' for tooltip */}
                <Link to={`/sample/edit/${book._id}`} title='Edit Book'>
                  <AiOutlineEdit className='text-2xl text-yellow-600 hover:text-yellow-400 transition-colors duration-150' />
                   {/* Alternative color: text-sky-600 hover:text-sky-800 */}
                </Link>
                {/* Added 'title' for tooltip */}
                <Link to={`/sample/delete/${book._id}`} title='Delete Book'>
                  <MdOutlineDelete className='text-2xl text-red-600 hover:text-red-400 transition-colors duration-150' />
                   {/* Alternative color: text-sky-600 hover:text-sky-800 */}
                </Link>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default BooksTable;