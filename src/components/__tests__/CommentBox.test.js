import React from 'react';
import { mount } from 'enzyme';
import CommentBox from '../CommentBox';

let wrapped;

beforeEach(() => {
	// Mount function mounts the actual component
	wrapped = mount(<CommentBox />);
});

afterEach(() => {
	// Unmount the component so that it do not affect others tests in this file
	wrapped.unmount();
});

it('has a textarea and a button', () => {
	expect(wrapped.find('textarea').length).toEqual(1);
	expect(wrapped.find('button').length).toEqual(1);
});
