import React from 'react';
import { shallow } from 'enzyme';

import Avatar from '../Avatar';
import Message from './Message';

describe('Test Message Component', () => {

    const msg = {
        "id": "cd445e6d-e514-424f-ba8f-16ec842002c6",
        "userId": "fe27b760-a915-475c-80bb-7cdf14cc6ef3",
        "message": "Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla.",
        "timestamp": "2017-02-09T04:27:38Z"
    };

    it('should render without crashing', () => {
        const wrapper = shallow(<Message {...msg} />);
        expect(wrapper.find(Avatar).length).toEqual(1);
        expect(wrapper.contains(<div className="text">Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla.</div>)).toBe(true);
        expect(wrapper.contains(<div className="time">February 9, 2017 4:27 AM</div>)).toBe(true);
        expect(wrapper).toMatchSnapshot();
    });

    
    

});
