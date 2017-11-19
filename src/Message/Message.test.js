import React from 'react';
import { shallow } from 'enzyme';

import Message from './Message';

describe('Test Message Component', () => {

    it('should render without crashing', () => {
        const msg = {
            "id": "cd445e6d-e514-424f-ba8f-16ec842002c6",
            "userId": "fe27b760-a915-475c-80bb-7cdf14cc6ef3",
            "message": "Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla.",
            "timestamp": "2017-02-09T04:27:38Z"
        };
        expect(shallow(<Message {...msg} />)).toMatchSnapshot();
    });

});
