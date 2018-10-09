import React, { PureComponent } from 'react';
import { Form, FormControl, Button } from 'react-bootstrap';
import { bake_cookie, read_cookie, delete_cookie } from 'sfcookies';
import Note from './Note';

const cookie_key = 'NOTES';

export default class App extends PureComponent {
    constructor() {
        super();
        this.state = {
            text: '',
            notes: []
        }
    }

    componentDidMount() {
        if (read_cookie(cookie_key).notes) {
            this.setState({ notes: read_cookie(cookie_key).notes });
        }
    }

    submit() {
        const { notes, text } = this.state;

        notes.push( { text } );
        this.setState({ text: '', notes });
        bake_cookie(cookie_key, { notes })
    }

    clear() {
        delete_cookie(cookie_key);
        this.setState({ notes: [] })
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
                            <Note key={index} note={note}/>
                        )
                    })
                }
                </div>
                <Button onClick={() => this.clear()}>Clear notes</Button>
            </div>
        );
    }
}
