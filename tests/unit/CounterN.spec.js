import { mount } from '@vue/test-utils';
import CounterN from '@/components/CounterN.vue';

describe("CounterN.vue", ()=> {
    it("renders component", ()=> {
        const wrapper = mount(CounterN);
        expect(wrapper.element).toMatchSnapshot();
    });
    it("has initial count 0", ()=> {
        const wrapper = mount(CounterN);
        expect(wrapper.vm.count).toEqual(0);
    });
    it("increment count by 1", ()=> {
        const wrapper = mount(CounterN);
        wrapper.vm.increment();
        expect(wrapper.vm.count).toEqual(1);
    });
    it("decrement count by 1", ()=> {
        const wrapper = mount(CounterN);
        wrapper.vm.decrement();
        expect(wrapper.vm.count).toEqual(-1);
    });
    it("reset count", ()=> {
        const wrapper = mount(CounterN);
        wrapper.vm.reset();
        expect(wrapper.vm.count).toEqual(0);
    });
    //testegem computed property
    it("multiplierCount is incremented", ()=> {
        const wrapper = mount(CounterN, {propsData: {multiplier: 4}});
        wrapper.vm.increment();
        expect(wrapper.vm.multiplierCount).toEqual(4);
    });
    it("multiplierCount is decremented", ()=> {
        const wrapper = mount(CounterN, {propsData: {multiplier: 4}});
        wrapper.vm.decrement();
        expect(wrapper.vm.multiplierCount).toEqual(-4);
    });
});