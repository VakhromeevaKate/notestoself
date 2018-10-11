import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from '../components/App';

configure({ adapter: new Adapter() });



describe('App', () => {
    let app = mount(<App />);
    const submitButton = app.find('.btn').at(0);
    const clearButton = app.find('.btn').at(1);

    // rendering - very simple tests

    it('Renders the app title', () => {
        expect(app.find('h2').text()).toEqual('Note to self');
    });

    it('renders the clear button', () => {
        expect(clearButton.text()).toEqual('Clear notes');
    });

    describe('when rendering the form', () => {
        it('creates Form component', () => {
            expect(app.find('Form').exists()).toBe(true);
        });

        it('creates FormControl component', () => {
            expect(app.find('FormControl').exists()).toBe(true);
        });

        it('renders the submit button', () => {
            expect(submitButton.text()).toEqual('Submit');
        });

    });

    // behavior

    describe('when creating a note', () => {
        let testNote = 'Test note';

        beforeEach(() => {
            app.find('FormControl').simulate('change', {
                target: { value: testNote }
            })
        });
        
        it('updates text in the state', () => {
            expect(app.state().text).toEqual(testNote);
        });

        describe('and submits a new note', () => {
            beforeEach(() => {
                submitButton.simulate('click');
            });

            afterEach(() => {
                clearButton.simulate('click');
            });

            it('adds a new to the state', () => {
                // console.log(app.state().notes);
                expect(app.state().notes[0].text).toEqual(testNote);
            });

            describe('and remounting the component', () => {
                let app2;
                beforeEach(() => {
                    app2 = mount(<App />);
                })

                it('reads notes from cookie', () => {
                    // console.log(app2.state().notes);
                    expect(app2.state().notes).toEqual([{text: testNote}]);
                });
            })
        });

        describe('and clicking a clear button', () => {
            beforeEach(() => {
                clearButton.simulate('click');
            });

            it('removes the note from the state', () => {
                expect(app.state().notes.length).toEqual(0);
            });
        });
    });
});