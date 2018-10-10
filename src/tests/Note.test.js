import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Note from '../components/Note';

configure({ adapter: new Adapter() });

const props = { note: {text: 'test_note'}};

describe('Note', () => {
    let note = mount(<Note {... props}/>);

    it('renders the note text', () => {
        expect(note.find('p').text()).toEqual(props.note.text);
        // console.log(note.debug());
    });
});
