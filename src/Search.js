import React from 'react';
import PropTypes from 'prop-types';
import BooksDisplay from './BooksDisplay';
import { Route, Link, Switch } from 'react-router-dom';
import * as BooksAPI from './BooksAPI';

class Search extends React.Component {

  static propTypes = {
    books: PropTypes.array.isRequired,
    changeCategory: PropTypes.func.isRequired
  };

  state = {
    query: '',
    searchedBooks: [],
    notFound: false
  };

  searchQuery = event => {
    const query = event.target.value;
    this.setState({ query });

    if (query) {
      BooksAPI.search(query.trim(), 20).then(books => {
        if(books.length > 0){this.setState({ searchedBooks: books, notFound: false })}
        else {this.setState({ searchedBooks: [], notFound: true });}
      });
    } else {this.setState({ searchedBooks: [], notFound: false });}
  };

  render() {

    const { query, searchedBooks, notFound } = this.state;
    const { books, changeCategory} = this.props;

    return (

      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/"> Close </Link>
          <div className="search-books-input-wrapper">
            <input type="text" placeholder="Search by title or author" value={query} onChange={this.searchQuery}/>
          </div>
        </div>
        <div className="search-books-results">
          {searchedBooks.length > 0 && (
            <div>
              <ol className="books-grid">
                {searchedBooks.map(book => (
                  <BooksDisplay book={book} books={books} key={book.id} changeCategory={changeCategory}/>
                ))}
              </ol>
            </div>
          )}
          {notFound && ( <h3> Sorry, it seems your book isn't available! </h3> )}
        </div>
      </div>
    );
  }
}

export default Search;
