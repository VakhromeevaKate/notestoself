import React, { PureComponent } from 'react';
import { Form, FormControl, Button } from 'react-bootstrap';

export default class App extends PureComponent {
    constructor() {
        super();
        this.state = {
            text: ''
        }
    }
    render() {
        return (
            <div>
                <h2>Note to self</h2>
                <Form inline>
                    <FormControl onChange={event => {this.setState({ text: event.target.value }) }}/>
                    {'  '}
                    <Button onClick={() => { console.log(`state: ${this.state.text}`) }}>
                        Submit
                    </Button>
                </Form>
            </div>
        );
    }
}
