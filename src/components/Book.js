import React, { Fragment } from 'react';
import * as BooksAPI from '../services/BooksAPI'
import {
    Row, Col, Button, Media
} from 'reactstrap';
import ShelfChanger from './ChangeShelf'


class Book extends React.Component {

    state = {
        book: null,
        dropDownValue: 'Update Progress',
        dropdownOpen: false
    }

    componentDidMount() {
        const { id } = this.props.match.params
        BooksAPI.get(id).then((book) => {
            this.setState({ book })
        })
    }

    render() {
        return (
            <div style={{ marginTop: '25px' }}>
                {this.state.book ?
                    <Fragment>
                        <Row>
                            <Col xs="3">
                                <Media object src={this.state.book.imageLinks['thumbnail']} alt="Book Image" /> <br />
                                <Button outline size="sm" className="float-left" style={{ marginTop: '15px' }}> {this.state.book.shelf} </Button>
                            </Col>
                            <Col xs="9">
                                <h3>{this.state.book.title}</h3>
                                <h5>{this.state.book.subtitle}</h5>
                                <p>{this.state.book.description}</p>
                            </Col>
                        </Row>
                        <Row className="float-right">
                            <ShelfChanger
                                book={this.state.book}
                                books={this.props.books}
                                changeShelf={this.props.changeShelf}
                            />
                        </Row>
                    </Fragment>
                    : ''}
            </div>
        )
    }
}


export default Book;
