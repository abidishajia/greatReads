import React, { Component } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

class ShelfChanger extends Component {

    state = {
        dropDownValue: 'Update',
        dropdownOpen: false
    }

    toggle = () => {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        });
    }

    changeValue = (book, e) => {
        this.setState({dropDownValue: e});
        this.props.changeShelf(book, e)
    }

    render() {
        return (
                <Dropdown toggle={this.toggle} isOpen={this.state.dropdownOpen}>
                    <DropdownToggle caret>
                        {this.state.dropDownValue}
                    </DropdownToggle>
                    <DropdownMenu right>
                        <DropdownItem onClick={() => this.changeValue(this.props.book, 'wantToRead')}>Want to read</DropdownItem>
                        <DropdownItem onClick={() => this.changeValue(this.props.book, 'currentlyReading')}>Currently Reading</DropdownItem>
                        <DropdownItem onClick={() => this.changeValue(this.props.book, 'read')}>Read</DropdownItem>
                    </DropdownMenu>
                </Dropdown>
        )
    }

}

export default ShelfChanger