import React from 'react';
import PropTypes from 'prop-types';

class BookChangeCategory extends React.Component {

  static propTypes = {
    book: PropTypes.object.isRequired,
    books: PropTypes.array.isRequired,
    changeCategory: PropTypes.func.isRequired
  };

  updateCategory = event => this.props.changeCategory(this.props.book, event.target.value);

  render() {
    const { book, books } = this.props;

    let currentCategory = 'none';

    for (let b of books) {
      if (b.id === book.id) {
        currentCategory = b.shelf;
        break;
      }
    }

    return (
      <div className="book-shelf-changer">
        <select onChange={this.updateCategory} defaultValue={currentCategory}>
          <option value="moveTo" disabled>
            Move to...
          </option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
          <option value="none">None</option>
        </select>
      </div>
    );
  }
}

export default BookChangeCategory;
