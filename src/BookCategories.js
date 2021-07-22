import React from 'react';
import PropTypes from 'prop-types';
import BooksDisplay from './BooksDisplay';

class BookCategories extends React.Component {

  static propTypes = {
    books: PropTypes.array.isRequired,
    changeCategory: PropTypes.func.isRequired
  };

  render() {

    const { books, changeCategory } = this.props;

    return (

      <ol className="books-grid">

        {books.map(book => (

          <BooksDisplay book={book} books={books} key={book.id} changeCategory={changeCategory} />

        ))}

      </ol>
    );

  }
}

export default BookCategories;
