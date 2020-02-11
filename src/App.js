import React from 'react';
import * as BooksAPI from './services/BooksAPI'
import Books from './components/Books';
import Book from './components/Book';
import { Container} from 'reactstrap';
import Navigation from './components/NavBar'

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import AddBook from './components/AddBook';

class App extends React.Component {
  state = { books: [] }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      console.log(books)
      this.setState({books})
    })
  }

  changeShelf = ( newBook, newShelf ) => {
    BooksAPI.update(newBook, newShelf).then(response =>{
      newBook.shelf = newShelf
      var updatedBooks = this.state.books.filter( book => book.id !== newBook.id )
      updatedBooks.push(newBook);
      this.setState({ books: updatedBooks })
    })
  }

  render() {
    return (
      <Container>
      <Navigation />
      <Router>
        <Switch>
          <Route exact path="/book/:id" render={(props) => <Book {...props} changeShelf={ this.changeShelf }  books={this.state.books}/>} />
          <Route exact path="/addBook" render={(props) => <AddBook {...props} changeShelf={ this.changeShelf } />} />
          <Route path="/">
            <Books books={this.state.books}/>
          </Route>
        </Switch>
      </Router>
      </Container>
    )
  }
}


export default App;
