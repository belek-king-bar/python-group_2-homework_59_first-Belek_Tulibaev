import React, {Component} from 'react';
import {ListGroup, ListGroupItem, Button, Input} from 'reactstrap';


class Movie extends Component {

    shouldComponentUpdate(nextProps, nextState) {
        console.log('[Movie] ShouldUpdate');
        return nextProps.text !== this.props.text
    }

    render() {
        return (
            <ListGroup className="container">
                <ListGroupItem>
                    <Input type="text" name="text" defaultValue={this.props.movies} value={this.props.text} onChange={this.props.onChangeInput}/>
                    <Button className="float-right mt-2" onClick={this.props.onDelete}>Delete</Button>
                </ListGroupItem>
            </ListGroup>
        );
    }
}


export default Movie;