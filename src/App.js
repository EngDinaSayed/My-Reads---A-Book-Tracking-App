import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import * as BooksAPI from './BooksAPI';
import './App.css';
import Books from './Books';
import Search from './Search';

class BooksApp extends React.Component {

  state = {
    books: []
  };
  
  //to get all the books loaded
  
  /*
  componentDidMount() {
    BooksAPI.getAll().then(books => this.setState({ books }));
  }
  */

  async componentDidMount() {
    const books = await BooksAPI.getAll()
    this.setState({ books })
  }
  
  /*
  categories = [
    { key: 'currentlyReading', name: 'Currently Reading' },
    { key: 'wantToRead', name: 'Want to Read' },
    { key: 'read', name: 'Read' },
  ];
  */

  /*
  changeCategory = (book, shelf) => {
    BooksAPI.update(book, shelf);

    let newCategory = [];
    newCategory = this.state.books.filter(b => b.id !== book.id);

    if (shelf !== 'none') {
      book.shelf = shelf;
      newCategory = newCategory.concat(book);
    }

    this.setState({
      books: newCategory,
    });
  };
  */

  changeCategory = (newBookCategory, shelf) => {
    BooksAPI.update(newBookCategory, shelf).then(response => {
      newBookCategory.shelf = shelf;
      this.setState(oldCategory => ({
        books: oldCategory.books.filter(book => book.id !== newBookCategory.id).concat(newBookCategory)
      }));
    });
  };

  render() {

   /* const books = this.state;
    return (
      <div className="app">
          <Route exact path="/" component={Books} />
      	  <Route path="/search" component={Search} />
      </div>
    );
    */

    const { books } = this.state;
    
    return (
      <div className="app">
        <Switch>
          <Route exact path="/" render={() => (
            
              <div className="list-books">
                <div className="list-books-title">
                  <h1>My Reads</h1>
                </div>
                
                <Books books={books} changeCategory={this.changeCategory}/>
                
                <div className="open-search">
                  <Link to="/search">Search</Link>
                </div>
              </div>
              
            )}
          />
          <Route path="/search" render={() => (
              <Search books={books} changeCategory={this.changeCategory}/>
            )}
          />
        </Switch>
      </div>
    );
  }
}

export default BooksApp;