import React, { PureComponent } from 'react';
import { Form, FormControl, Button } from 'react-bootstrap';

export default class App extends PureComponent {
    render() {
        return (
            <div>
                <h2>Note to self</h2>
                <Form>
                    <FormControl />
                    <Button>Submit</Button>
                </Form>
            </div>
        );
    }
}
