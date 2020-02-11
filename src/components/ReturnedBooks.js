import React, { Component } from 'react';
import ShelfChanger from './ChangeShelf'
import { Row, Col, Media } from 'reactstrap';


class ReturnedBooks extends Component {
  render() {
    const { book, books, changeShelf } = this.props

    return (
      <Col xs="4" style={{ marginTop: '25px' }} key={book.id}>
        <Row>
          <Col xs="12">
            <Media object src={book.imageLinks['thumbnail']} alt={book.title} /> <br />
          </Col>
          <Col xs="12">
            {book.title}
          </Col>
          <Col xs="12">
            <ShelfChanger
              book={book}
              books={books}
              changeShelf={changeShelf}
            />
          </Col>
        </Row>
      </Col>

    )
  }

}

export default ReturnedBooks