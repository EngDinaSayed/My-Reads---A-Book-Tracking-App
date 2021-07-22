import React from 'react';
import PropTypes from 'prop-types';
import BookCategories from './BookCategories';

const Books = props => {
  const { books, changeCategory } = props;
  const categories = [
    { type: 'currentlyReading', title: 'Currently Reading' },
    { type: 'wantToRead', title: 'Want to Read' },
    { type: 'read', title: 'Read' }
  ];

  return (
    <div className="list-books-content">
      {categories.map((shelf, key) => {
        const BooksOnShelf = books.filter(book => book.shelf === shelf.type);
        return (
          <div className="bookshelf" key={key}>
            <h2 className="bookshelf-title">{shelf.title}</h2>
            <div className="bookshelf-books">
              <BookCategories books={BooksOnShelf} changeCategory={changeCategory} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

Books.propTypes = {
  books: PropTypes.array.isRequired,
  changeCategory: PropTypes.func.isRequired
};

export default Books;
