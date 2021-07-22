import React from 'react';
import { Router, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as BooksAPI from './BooksAPI';
import Books from './Books';

class Search extends React.Component {

  static propTypes = {
    changedBook: PropTypes.array,
    changeCategory: PropTypes.func.isRequired
  }

  state = {
    query: '',
    books: []
  }

  getSearchResults = (event) => {
    const query = event.target.value;
    this.setState({ query });
  }

  updateQuery = (query) => {
    this.setState({ query: query })
  }

  clearQuery = () => {
    this.setState({ query: '', books: []})
  }

  render() {

    const { changeCategory } = this.props
    const { query, books } = this.state;
    
    let searchResults;

    if (query) {
        searchResults = books.filter(book => book.title)
    } else {
        searchResults = books
    }

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/">
            Close
          </Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              value={query}
              onChange = {this.getSearchResults}
            />
          </div>
        </div>
        <div className="search-books-results">
          {books.length > 0 && (
            <div>
              <ol className="books-grid">
                {books.map(book => (
                <Books
                  key={book.id}
                  book={book}
                  shelf={book.shelf ? book.shelf : 'none'}
                  changeCategory={changeCategory}
                />
                ))}
              </ol>
            </div>
          )}
          )
        </div>
      </div>
    );
  }
}

export default Search;