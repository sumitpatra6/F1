import React, { Component } from 'react'
import { InputGroup, InputGroupText, InputGroupAddon, Input, Button } from 'reactstrap'

class SearchComponent extends Component {
    constructor(props) {
        super(props);
        this.style = this.props.style;
        console.log(this.style)
    }

    render() {
        return (
            <InputGroup style = {this.props.style}>
                <Input />
                <InputGroupAddon addonType="append">
                    <Button color='secondary' >{this.props.buttonText}</Button>
                </InputGroupAddon>
            </InputGroup>
        );
    }
}
export default SearchComponent;