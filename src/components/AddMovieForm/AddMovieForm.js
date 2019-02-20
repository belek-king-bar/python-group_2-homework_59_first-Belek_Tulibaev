import React, {Component} from 'react';
import { Button, Form, FormGroup, Input} from 'reactstrap';

class AddMovieForm extends Component {
    render() {
        return (
            <Form className="container">
                <FormGroup>
                    <Input className="mb-3 mt-3" type="text" name="text" value={this.props.text} onChange={this.props.onChangeInput}/>
                    <Button disabled={this.props.isAddButtonDisabled} type="submit" onClick={this.props.onAddMovie}>Добавить</Button>
                </FormGroup>
            </Form>
        );
    }
}



export default AddMovieForm;