import React, { PureComponent } from 'react';

export default class Note extends PureComponent {
    render() {
        const { note } = this.props;

        return (
        <div className='note'>
            <p>
                {note.text}
            </p>
        </div>
        );
    }
}