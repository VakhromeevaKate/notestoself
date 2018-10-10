import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Note from '../components/Note';

configure({ adapter: new Adapter() });

describe('Note', () => {
    let note = mount(
        <Note note={{ text: 'test note'}}/>
    );

    it('renders the note text', () => {
        expect(note.find('p').text()).toEqual('test note');
    });
});
