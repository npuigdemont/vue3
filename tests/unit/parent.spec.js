

import { mount } from '@vue/test-utils';
import ParentN from '@/components/ParentN.vue';

describe("ParentN.vue", () => {
    it('', ()=>{
        const wrapper = mount(ParentN);
        expect(wrapper.text()).toContain('Child');
    })
})
