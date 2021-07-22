import React from 'react';
import { Router, Link } from 'react-router-dom';
import * as BooksAPI from './BooksAPI';
//import undefined from './icons/no-image-large.png'

class BooksOldVersion extends React.Component {

  state = {
    value: this.props.shelf,
   // books: []
  }

  handleChange = event => {
    this.setState({ value: event.target.value });
    this.props.changeCategory(this.props.book, event.target.value);
  }

  render() {

  	const { books, book, shelf } = this.props;
   // const { books } = this.state;

    const currentlyReading = books.filter(book => book.shelf === 'currentlyReading');
    const wantToRead = books.filter(book => book.shelf === 'wantToRead');
    const read = books.filter(book => book.shelf === 'read');
    
    /*
    const bookImg = book.imageLinks && book.imageLinks.thumbnail
      ? book.imageLinks.thumbnail
      : undefined;
    */

    return (
      <div className="list-books-content">
      <div>
        <div className="bookshelf">
          <h2 className="bookshelf-title">Currently Reading</h2>
          <div className="bookshelf-books">
          <div className="bookshelf-books">
            <ol className="books-grid"> {currentlyReading.map((book, i) => (
              <li key={i}>
                <div className="book">
                  <div className="book-top">
                    <div className="book-cover" style={{ backgroundImage: 'url("http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api")' }}></div>
                    <div className="book-shelf-changer">
                      <select value={book.shelf}>
                        <option value="move" disabled> Move to... </option>
                        <option name="currentlyReading" value="currentlyReading">Currently Reading</option>
                        <option name="wantToRead" value="wantToRead">Want to Read</option>
                        <option name="read" value="read">Read</option>
                        <option name="none" value="none">None</option>
                      </select>
                    </div>
                  </div>
                  <div className="book-title">{book.title}</div>
                  <div className="book-authors"> {book.authors && book.authors.join(', ')} </div>
                </div>
              </li>
            ))}
            </ol>
          </div>
          </div>
        </div>
      </div>
      <div>
      <div className="bookshelf">
        <h2 className="bookshelf-title">Want to Read</h2>
        <div className="bookshelf-books">
        <div className="bookshelf-books">
          <ol className="books-grid"> {wantToRead.map((book, i) => (
            <li key={i}>
              <div className="book">
                <div className="book-top">
                  <div className="book-cover" style={{ backgroundImage: 'url("http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api")' }}></div>
                  <div className="book-shelf-changer">
                    <select value={book.shelf}>
                      <option value="move" disabled> Move to... </option>
                      <option name="currentlyReading" value="currentlyReading">Currently Reading</option>
                      <option name="wantToRead" value="wantToRead">Want to Read</option>
                      <option name="read" value="read">Read</option>
                      <option name="none" value="none">None</option>
                    </select>
                  </div>
                </div>
                <div className="book-title">{book.title}</div>
                <div className="book-authors"> {book.authors && book.authors.join(', ')} </div>
              </div>
            </li>
          ))}
          </ol>
        </div>
        </div>
      </div>
    </div>
    <div>
      <div className="bookshelf">
        <h2 className="bookshelf-title">Read</h2>
        <div className="bookshelf-books">
        <div className="bookshelf-books">
          <ol className="books-grid"> {read.map((book, i) => (
            <li key={i}>
              <div className="book">
                <div className="book-top">
                  <div className="book-cover" style={{ backgroundImage: 'url("http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api")' }}></div>
                  <div className="book-shelf-changer">
                    <select value={book.shelf}>
                      <option value="move" disabled> Move to... </option>
                      <option name="currentlyReading" value="currentlyReading">Currently Reading</option>
                      <option name="wantToRead" value="wantToRead">Want to Read</option>
                      <option name="read" value="read">Read</option>
                      <option name="none" value="none">None</option>
                    </select>
                  </div>
                </div>
                <div className="book-title">{book.title}</div>
                <div className="book-authors"> {book.authors && book.authors.join(', ')} </div>
              </div>
            </li>
          ))}
          </ol>
        </div>
        </div>
      </div>
    </div>
    </div>
    );
  }
}

export default BooksOldVersion;