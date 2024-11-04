import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const Bookdetails = () => {
    const {bookId}=useParams();
    const data=useLoaderData();
    const id=parseInt(bookId);
    const book=data.find(book=>book.bookId===id)
    const {bookId:currentBookId,image}=book;
    return (
        <div>
            <h1>Bookdetails :{bookId}</h1>
            <img className='w-36' src={image} alt="" />
        </div>
    );
};

export default Bookdetails;