import React from 'react';
import { shallow } from 'enzyme';

import Avatar from './Avatar';

describe('Test Avatar Component', () => {

    const user = {
        "id": "e837c9f5-247f-445f-bcc3-7d434348336b",
        "firstName": "Martin",
        "lastName": "Bradley",
        "email": "mbradley0@google.it",
        "avatar": "http://dummyimage.com/100x100.png/5fa2dd/ffffff",
        "ip": "166.124.172.160"
    };

    it('should render without crashing', () => {
        const name = `${user.firstName} ${user.lastName}`;
        const wrapper = shallow(<Avatar imageUrl={user.avatar} imageName={name} />);
        expect(wrapper.contains(<img alt={name} src={user.avatar} />)).toBe(true);
        expect(wrapper).toMatchSnapshot();
    });

});
