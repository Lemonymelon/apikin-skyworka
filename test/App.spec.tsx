import * as React from 'react';
import * as Enzyme from 'enzyme';
import ReactSixteenAdapter from 'enzyme-adapter-react-16';
import axios from 'axios';
import 'regenerator-runtime/runtime';
import MockAdapter from 'axios-mock-adapter';

// @ts-ignore
import './tempPolyfills';

import App from '../src/App';

Enzyme.configure({ adapter: new ReactSixteenAdapter() });
const { shallow, mount } = Enzyme;

describe('App', () => {
  describe('initially rendered components', () => {
    it('renders a div', () => {
      const wrapper = shallow(<App />);
      expect(wrapper.hasClass('App')).toBe(true);
    });
  });
});
