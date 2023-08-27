import React from 'react';
import { shallow } from 'enzyme';
import Orders from '../Order';

describe('Order Component',() => {
    it('render without crashing',() => {
        shallow(<Orders/>)
    })

    it('display correct infromation',() => {
        const wrapper = shallow(<Orders />);
        wrapper.setState({
            data:{
                Orders:{
                    order_name:"Sample Order",
                    category:"Sample Category",
                    price:140
                }
            }
        });

        expect(wrapper.find('h2').at(0).text()).toBe('Sample Order')
        expect(wrapper.find('h2').at(1).text()).toBe('Sample Category')
        expect(wrapper.find('h2').at(2).text()).toBe(140)
    })

})