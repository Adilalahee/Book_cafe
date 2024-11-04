import { data } from 'autoprefixer';
import React, { useEffect, useState } from 'react';
import Book from '../Book/Book';

const Books = () => {
    const [books, setBooks]=useState([]);

    useEffect( () => {
        fetch('../../../public/booksData.json')
        .then(res =>res.json())
        .then(data =>setBooks(data))
    },[])
    
    return (
        <div>
           <h2 className="text-bold text-center text-xl">Books</h2> 
         <div className='grid grid-cols-1 md:grid-cols-3'>
         {
            books.map(book=><Book key={book.bookId} book={book}></Book>)
        }
         </div>
        
        </div>
    );
};

export default Books;<h2 className="text-bold text-center text-xl">Books</h2>