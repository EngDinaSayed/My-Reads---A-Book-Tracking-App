import React from 'react';
import PropTypes from 'prop-types';
import BookChangeCategory from './BookChangeCategory';
//import undefined from './no-image-large.png';

const BooksDisplay = props => {

  const { book, books, changeCategory } = props;

  let titleAvailability = book.title ? book.title : 'undefined';

  let bookCover = !book.imageLinks ? "https://drive.google.com/file/d/1JxHLDN1uOW121jVAZ87-dN15iPKZ4tT4/view?usp=sharing" : book.imageLinks.thumbnail;
  
  return (

    <li>
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${bookCover})` }} />
          <BookChangeCategory book={book} books={books} changeCategory={changeCategory} />
        </div>
        <div className="book-title"> {titleAvailability} </div>
        { book.authors && book.authors.map((author, key) => (
            <div className="book-authors" key={key}> {author} </div>
          ))}
      </div>
    </li>
  );
};

BooksDisplay.propTypes = {
    book: PropTypes.object.isRequired,
    books: PropTypes.array.isRequired,
    changeCategory: PropTypes.func.isRequired
};

export default BooksDisplay;
