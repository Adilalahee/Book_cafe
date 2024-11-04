import React from 'react';
import { Link } from 'react-router-dom';

const Book = ({book}) => {
    const {bookId,image,bookName,author,tags,category,rating}=book;
    return (
      <Link to={`/books/${bookId}`}>
        <div className="card bg-base-100 w-96 shadow-xl p-6">
        <figure className='bg-blue-200 py-8'>
          <img
          className='h-[166px]'
            src={image}
            alt={bookName} />
        </figure>
        <div className="card-body">
            <div className='flex justify-center gap-4'>
                {tags.map((tag,index)=><button key={index} className='btn btn-xs bg-green-200'>{tag}</button> )}
            </div>
          <h2 className="card-title">
            {bookName}
            <div className="badge badge-secondary">NEW</div>
          </h2>
          <p>By:{author}</p>
          <div className='border-t-2 border-dashed bg-black'></div>
          <div className="card-actions justify-between">
            <div className="badge badge-outline">{category}</div>
            <div className='flex'>
               <h3>{rating}</h3>
            <div className="rating">
                <input type="radio" name="rating-1" className="mask mask-star" />
                <input type="radio" name="rating-1" className="mask mask-star" defaultChecked />
            </div>
            </div>
          </div>
        </div>
      </div>
      </Link>
    );
};

export default Book;