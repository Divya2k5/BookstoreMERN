import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Spinner from '../component/Spinner';
import { Link } from 'react-router-dom';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineAddBox, MdOutlineDelete } from 'react-icons/md';
import BooksTable from '../component/Home/BooksTable';
import BooksCard from '../component/Home/BooksCard';
import { host } from '../utils/constant';

const Home = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showType, setShowType] = useState('table');

  useEffect(() => {
    setLoading(true);
    axios
      .get(host)
      .then((response) => {
        setBooks(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  return (
    // We remove the default 'p-4' from the main container
    // to allow the hero section to go full-width
    <div>
      {/* --- YOUR NEW PROFESSIONAL HERO SECTION --- */}
      <section className="bg-gradient-to-r from-sky-700 to-sky-900 text-white shadow-lg">
        <div className="container mx-auto px-6 py-20 text-center">
          <h1 className="text-5xl font-bold mb-4 tracking-tight">
            Welcome to Your Digital Bookshelf
          </h1>
          <p className="text-xl text-sky-100 mb-10 max-w-2xl mx-auto">
            Discover, manage, and track your personal library. Your next great
            read is just a click away.
          </p>
          <a
            href="#book-list"
            className="bg-white text-sky-800 font-bold py-3 px-8 rounded-full text-lg 
                       transition duration-300 ease-in-out transform hover:bg-sky-50 hover:scale-105"
          >
            View Your Collection
          </a>
        </div>
      </section>

      {/* --- EXISTING BOOK LIST (I added 'p-4' back here) --- */}
      <div className="p-4">
        <div className="flex justify-center items-center gap-x-4 mt-8">
          <button
            className="bg-sky-300 hover:bg-sky-600 px-4 py-1 rounded-lg"
            onClick={() => setShowType('table')}
          >
            Table
          </button>
          <button
            className="bg-sky-300 hover:bg-sky-600 px-4 py-1 rounded-lg"
            onClick={() => setShowType('card')}
          >
            Card
          </button>
        </div>

        <div className="flex justify-between items-center">
          {/* This ID allows the button in the hero section to scroll here */}
          <h1 className="text-3xl my-8" id="book-list">
            Books List
          </h1>
          <Link to="/sample/create">
            <MdOutlineAddBox className="text-sky-800 text-4xl" />
          </Link>
        </div>

        {loading ? (
          <Spinner />
        ) : showType === 'table' ? (
          <BooksTable books={books} />
        ) : (
          <BooksCard books={books} />
        )}
      </div>
    </div>
  );
};

export default Home;