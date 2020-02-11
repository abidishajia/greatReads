import React, { Component, Fragment } from 'react';
import ReturnedBooks from './ReturnedBooks'
import * as BooksAPI from '../services/BooksAPI'
import { Row, Input } from 'reactstrap';

class AddBook extends Component {
    state = {
        query: '',
        filteredBooks: [],
        searchResults: false,
    }

    getBooks = (event) => {
        const query = event.target.value
        this.setState({ query: query })

        if (query) {
            BooksAPI.search(query).then((books) => {
                books.length > 0 ? this.setState({ filteredBooks: books, searchResults: false }) : this.setState({ filteredBooks: [], searchResults: true })
            })
        } else {
            this.setState({ filteredBooks: [], searchResults: false })
        }
    }
    render() {

        const { query, filteredBooks } = this.state
        const { books, changeShelf } = this.props
        return (
            <Fragment>
                <div className="search-books-bar">
                    <div className="search-books-input-wrapper">
                        <Input placeholder="Search by title or author" value={query}
                            onChange={this.getBooks} />
                    </div>
                </div>
                <div className="search-books-results">
                    {(
                        <div>
                            <Row>
                                {filteredBooks.map((book) => (
                                    <ReturnedBooks
                                        book={book}
                                        books={books}
                                        key={book.id}
                                        changeShelf={changeShelf}
                                    />
                                ))}
                            </Row>
                        </div>
                    )}
                </div>
            </Fragment>
        )
    }
}
export default AddBook