import React from 'react';
import { ListGroup, ListGroupItem, Media, Button } from 'reactstrap';

class Books extends React.Component {
    render() {
        const { books } = this.props
        return (
            <ListGroup>
                {books.map(book => (
                    <ListGroupItem key={book.id}>
                    <Media>
                        <Media left href={`book/${book.id}`}>
                            <Media  object src={book.imageLinks['smallThumbnail']} alt="Book Image" />
                        </Media>
                        <Media body style={{marginLeft: "10px"}}>
                        <Button disabled size="sm" className="float-right"> {book.shelf} </Button>
                            <Media heading>
                                {book.title}   
                            </Media>
                            {book.subtitle} -  
                            <span style={{fontStyle: "italic"}}>
                                         by  {book.authors}
                            </span>
                        </Media>
                    </Media>
                    </ListGroupItem>
                ))}
            </ListGroup>
        )
    }
}


export default Books;
