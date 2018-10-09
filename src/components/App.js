import React, { PureComponent } from 'react';
import { Form, FormControl, Button } from 'react-bootstrap';

export default class App extends PureComponent {
    constructor() {
        super();
        this.state = {
            text: '',
            notes: []
        }
    }

    submit() {
        const notes = this.state.notes;
        const newNote = {text: this.state.text};

        notes.push(newNote);
        this.setState({text: '', notes: notes});
    }

    render() {
        return (
            <div>
                <h2>Note to self</h2>
                <Form inline>
                    <FormControl value={this.state.text} onChange={event => {this.setState({ text: event.target.value }) }}/>
                    {'  '}
                    <Button onClick={() => this.submit()}>Submit</Button>
                </Form>
                <div>
                {
                    this.state.notes.map((note, index) => {
                        return(
                            <div key={index}>{note.text}</div>
                        )
                    })
                }
                </div>
            </div>
        );
    }
}
