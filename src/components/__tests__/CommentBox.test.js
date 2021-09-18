import React from 'react';
import { mount } from 'enzyme';
import CommentBox from '../CommentBox';
import Root from '../../store';
let wrapped;

beforeEach(() => {
	// Mount function mounts the actual component ==> (Full JS DOM render)
	wrapped = mount(
		<Root>	
			<CommentBox />
		</Root>
	);
});

afterEach(() => {
	// Unmount the component so that it do not affect others tests in this file
	wrapped.unmount();
});

it('has a textarea and two buttons', () => {
	expect(wrapped.find('textarea').length).toEqual(1);
	expect(wrapped.find('button').length).toEqual(2);
});

describe('the textarea', () => {
	beforeEach(() => {
		wrapped
			.find('textarea')
			.simulate('change', { target: { value: 'New comment' } });

		// As we know setState method is async so we have to
		// force the component to rerender itself using update method
		// provided by Enzyme so that we dont have to wait for auto rendering process
		// of the component
		wrapped.update();
	});

	it('has a textarea that users can type in', () => {
		expect(wrapped.find('textarea').prop('value')).toEqual('New comment');
	});

	it('show textarea is cleared after submitting comment', () => {
		wrapped.find('form').simulate('submit');
		wrapped.update();

		expect(wrapped.find('textarea').prop('value')).toEqual('');
	});
});
